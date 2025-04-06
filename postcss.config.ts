import { PluginCreator } from 'postcss';
import hoverMediaPlugin from './plugins/hovermedia';

type PrettifyOptions = {
  indent?: string;
  linebreak?: string;
  selectorSep?: string;
  syntax?: 'css' | 'scss';
};

const postcssPrettify: PluginCreator<PrettifyOptions> = require('postcss-prettify');

export default {
  plugins: [
    hoverMediaPlugin(),
    postcssPrettify({
      indent: '\t',
      linebreak: '\n'
    })
  ]
};