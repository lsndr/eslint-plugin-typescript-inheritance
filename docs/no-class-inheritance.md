## typescript-inheritance/no-class-inheritance

This rule forbids usage of class inheritance except inheritance of abstract classes.

You can forbid usage of inheritance completely by setting `noInheritanceOfAbstractClasses` option:

```json
{
  "rules": {
    "typescript-inheritance/no-class-inheritance": [
      "error",
      {
        "noInheritanceOfAbstractClasses": true
      }
    ]
  }
}
```
