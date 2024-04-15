import { readPackage } from './helpers';

const pkg = readPackage();

/**
 * Plugin meta
 */
export const meta = {
  name: pkg.name,
  version: pkg.version,
};

/**
 * Rules
 */
export { rules } from './rules';

/**
 * Configs
 */
export { configs } from './configs';
