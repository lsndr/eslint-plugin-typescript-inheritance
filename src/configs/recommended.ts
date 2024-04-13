import { readPackage } from './../helpers';

const pkg = readPackage();
const pluginName = pkg.name.replace('eslint-plugin-', '');

export const name = 'recommended';

export const config = {
  plugins: [pluginName],
  rules: {
    [`${pluginName}/no-inheritance`]: 'error',
  },
};
