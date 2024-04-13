import { readPackage } from './helpers';

const pkg = readPackage();

export const meta = {
  name: pkg.name,
  version: pkg.version,
};

export { rules } from './rules';

export { configs } from './configs';
