import { readPackage } from './../helpers';

const pkg = readPackage();
const pluginName = pkg.name.replace('eslint-plugin-', '');

/**
 * Name
 */
export const name = 'recommended';

/**
 * Config
 */
export const config = {
  plugins: [pluginName],
  rules: {
    [`${pluginName}/no-class-inheritance`]: 'error',
  },
};
