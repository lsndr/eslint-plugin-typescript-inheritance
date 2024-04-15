import { RuleTester } from '@typescript-eslint/rule-tester';
import * as noInheritanceRule from './no-inheritance.rule';
import * as path from 'path';

describe('Rule', () => {
  const tester = new RuleTester({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: path.resolve(__dirname, '../../..'),
    },
  });

  tester.run(noInheritanceRule.name, noInheritanceRule.rule, {
    valid: [
      'abstract class Grandparent {} abstract class Parent extends Grandparent {} class Child extends Parent {}',
      'abstract class Parent {} class Child extends Parent {}',
      'interface Type {} class Child implements Type {}',
      'interface Type {} abstract class Parent {} class Child extends Parent implements Type {}',
      {
        code: 'abstract class Parent {} class Child extends Parent {}',
        options: [{ noInheritanceOfAbstractClasses: false }],
      },
    ],
    invalid: [
      {
        code: 'class Parent {} class Child extends Parent {}',
        errors: [{ messageId: 'inheritanceNotAllowed' }],
      },
      {
        code: 'abstract class Parent {} class Child extends Parent {}',
        errors: [{ messageId: 'inheritanceNotAllowed' }],
        options: [{ noInheritanceOfAbstractClasses: true }],
      },
      {
        code: 'class Grandparent {} abstract class Parent extends Grandparent {} class Child extends Parent {}',
        errors: [{ messageId: 'inheritanceNotAllowed' }],
      },
    ],
  });
});
