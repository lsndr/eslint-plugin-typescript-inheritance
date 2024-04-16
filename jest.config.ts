/* eslint-disable import/no-default-export -- Required by jest */

import { Config } from 'jest';

export default {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['.*\\.spec\\.ts'],
  coverageDirectory: './coverage',
  preset: 'ts-jest',
  transform: {
    '^.+\\.[tj]s?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
} satisfies Config;
