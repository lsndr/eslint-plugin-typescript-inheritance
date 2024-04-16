# eslint-plugin-typescript-inheritance

[![npm version](https://badge.fury.io/js/eslint-plugin-typescript-inheritance.svg)](https://badge.fury.io/js/eslint-plugin-typescript-inheritance)
[![npm downloads/month](https://img.shields.io/npm/dm/eslint-plugin-typescript-inheritance.svg)](https://www.npmjs.com/package/eslint-plugin-typescript-inheritance)
[![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-typescript-inheritance.svg)](https://www.npmjs.com/package/eslint-plugin-typescript-inheritance)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lsndr/eslint-plugin-typescript-inheritance/blob/master/LICENSE.md)

ESLint typescript plugin to control inheritance. By default it forbids all inheritance except inheritance of abstract classes. See [rule description](./docs/no-class-inheritance.md) for the details.

## Installation

This tutorial implies that [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) is installed and [linting with type information](https://typescript-eslint.io/getting-started/typed-linting) is set up

```sh
npm install eslint-plugin-typescript-inheritance --save-dev
```

**Note:** If you installed ESLint globally then you must also install `eslint-plugin-typescript-inheritance` globally.

## Usage

Add `typescript-inheritance` to the plugins section. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["typescript-inheritance"]
}
```

Then enable all rules with recommended configuration:

```json
{
  "extends": ["plugin:typescript-inheritance/recommended"]
}
```

Or configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "typescript-inheritance/no-class-inheritance": ["error"]
  }
}
```

## Supported Rules

| Name                                                                            | Description                                                                            |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`typescript-inheritance/no-class-inheritance`](./docs/no-class-inheritance.md) | Forbids usage of class inheritance except inheritance of abstract classes (by default) |
