import { PluginCreator, Rule, AtRule } from 'postcss';

const hoverMediaPlugin: PluginCreator<{}> = () => {
  return {
    postcssPlugin: 'postcss-hover-media',
    Rule(rule) {
      if (rule.parent && 'name' in rule.parent && rule.parent.name === 'media') return;

      if (rule.selector.includes(':hover')) {
        const hoverMedia = new AtRule({
          name: 'media',
          params: '(hover: hover) and (pointer: fine)',
          raws: { before: '', after: '', between: ' ', semicolon: false }
        });
        
        const hoverRule = rule.clone();
        hoverRule.raws.before = '\n\t';
        hoverMedia.append(hoverRule);
        hoverMedia.raws.after = '\n';

        const activeMedia = new AtRule({
          name: 'media',
          params: '(hover: none) and (pointer: coarse)',
          raws: { before: '\n', after: '\n', between: ' ', semicolon: false }
        });
        
        const activeRule = rule.clone();
        activeRule.selectors = activeRule.selectors.map(sel => 
          sel.replace(/:hover/g, ':active')
        );
        activeRule.raws.before = '\n\t';
        activeMedia.append(activeRule);

        rule.replaceWith(hoverMedia, activeMedia);
      }
    }
  };
};

hoverMediaPlugin.postcss = true;

export default hoverMediaPlugin;