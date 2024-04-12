import { ClassDeclaration, Node, SyntaxKind, TypeChecker } from 'typescript';

export class ClassType {
    private readonly inheritedClasses: readonly ClassDeclaration[];

    constructor(node: Node, typeChecker: TypeChecker) {
        if (node.kind !== SyntaxKind.ClassDeclaration) {
            throw new Error('Node is not a class declaration');
        }

        this.inheritedClasses = this.extractInheritedClasses(node, typeChecker);
    }

    private extractInheritedClasses(node: Node, typeChecker: TypeChecker) {
        const baseTypes = typeChecker.getTypeAtLocation(node).getBaseTypes() || [];

        return baseTypes.reduce<ClassDeclaration[]>((classDeclarations, baseType) => {
            const symbol = baseType.getSymbol();

            if (!symbol) {
                return classDeclarations;
            }

            const declarations = symbol.getDeclarations();

            if (!declarations) {
                return classDeclarations;
            }

            for (const declaration of declarations) {
                if (this.isClassDeclaration(declaration)) {

                    classDeclarations.push(declaration);
                }
            }

            return classDeclarations;
        }, []);
    }

    private isClassDeclaration(node: Node): node is ClassDeclaration {
        return node.kind === SyntaxKind.ClassDeclaration;
    }

    hasInheritance() {
        return this.inheritedClasses.length > 0;
    }

    inheritsOnlyAbstractClasses() {
        return this.inheritedClasses.every(classDeclaration => {
            return classDeclaration.modifiers?.some(modifier => modifier.kind === SyntaxKind.AbstractKeyword);
        });
    }
}