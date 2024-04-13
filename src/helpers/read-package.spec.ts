import { readPackage } from './read-package';

describe(readPackage, () => {
  it('should read package.json', () => {
    // act
    const pkg = readPackage();

    // assert
    expect(pkg.name).toBe('eslint-plugin-typescript-inheritance');
  });
});
