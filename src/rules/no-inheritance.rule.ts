import { ESLintUtils } from '@typescript-eslint/utils';
import { ClassType } from './class-type';

const createRule = ESLintUtils.RuleCreator(
  () => `https://github.com/lsndr/eslint-plugin-typescript-inheritance`,
);

export const name = 'no-inheritance';

export const rule = createRule({
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
  meta: {
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
  },
  name,
  defaultOptions: [
    {
      noInheritanceOfAbstractClasses: false,
    },
  ],
});
