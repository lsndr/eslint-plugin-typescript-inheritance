import { ESLintUtils } from '@typescript-eslint/utils';
import { ClassType } from './class-type';
import { NamedCreateRuleMeta } from '@typescript-eslint/utils/eslint-utils';

const createRule = ESLintUtils.RuleCreator(
  () => `https://github.com/lsndr/eslint-plugin-typescript-inheritance`,
);

/**
 * Rule name
 */
export const name = 'no-inheritance';

/**
 * Options
 */
type NoInheritanceOfAbstractClassesOptions = {
  noInheritanceOfAbstractClasses: boolean;
};
type Options = [NoInheritanceOfAbstractClassesOptions];

/**
 * Default Options
 */
const defaultOptions: Options = [
  {
    noInheritanceOfAbstractClasses: false,
  },
];

/**
 * Meta
 */
const meta: NamedCreateRuleMeta<string, Options> = {
  docs: {
    description: 'Inheritance is not allowed.',
  },
  messages: {
    inheritanceNotAllowed: 'Inheritance is not allowed.',
  },
  type: 'problem',
  schema: [
    {
      type: 'object',
      properties: {
        noInheritanceOfAbstractClasses: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    },
  ],
};

/**
 * Rule
 */
export const rule = createRule({
  meta,
  name,
  defaultOptions,
  create(context, options) {
    return {
      ClassDeclaration(node) {
        const services = ESLintUtils.getParserServices(context);
        const tsNode = services.esTreeNodeToTSNodeMap.get(node);
        const checker = services.program.getTypeChecker();

        const classType = new ClassType(tsNode, checker);

        if (!classType.hasInheritance()) {
          return;
        }

        if (
          options[0]?.noInheritanceOfAbstractClasses ||
          !classType.inheritsOnlyAbstractClasses()
        ) {
          context.report({
            messageId: 'inheritanceNotAllowed',
            node,
          });
        }
      },
    };
  },
});
