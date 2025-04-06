import { PluginCreator, Rule, AtRule, Root } from 'postcss';

const hoverMediaPlugin: PluginCreator<{}> = () => {
  return {
    postcssPlugin: 'postcss-hover-media',
    Once(root: Root) {
      const hoverRules: Rule[] = [];
      const activeRules: Rule[] = [];

      root.walkRules(rule => {
        if (rule.selector.includes(':hover') && 
            !(rule.parent && rule.parent.type === 'atrule')) {
          hoverRules.push(rule.clone());
          
          const activeRule = rule.clone();
          activeRule.selectors = activeRule.selectors.map(sel => 
            sel.replace(/:hover/g, ':active')
          );
          activeRules.push(activeRule);
          
          rule.remove();
        }
      });

      if (hoverRules.length > 0) {
        const hoverMedia = new AtRule({
          name: 'media',
          params: '(hover: hover) and (pointer: fine)',
          raws: { before: '\n', between: ' ', after: '\n' }
        });
        
        hoverRules.forEach(rule => {
          rule.raws.before = '\n\t';
          hoverMedia.append(rule);
        });
        hoverMedia.raws.after = '\n';
        root.append(hoverMedia);
      }

      if (activeRules.length > 0) {
        const activeMedia = new AtRule({
          name: 'media', 
          params: '(hover: none) and (pointer: coarse)',
          raws: { before: '\n', between: ' ', after: '\n' }
        });
        
        activeRules.forEach(rule => {
          rule.raws.before = '\n\t';
          activeMedia.append(rule);
        });
        root.append(activeMedia);
      }
    }
  };
};

hoverMediaPlugin.postcss = true;
export default hoverMediaPlugin;