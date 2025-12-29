# Component Library

### Testing

I use a combination of Angular Unit Tests, Cypress and Storybook for a variety of things

Below is a breakdown of why

| Feature                                  | Angular Unit Tests | Cypress | Storybook |
|------------------------------------------|--------------------|---------|-----------| 
| Coverage Reports                         | Y                  | -       | -         |
| Pipe Tests                               | Y                  | -       | -         |
| Directive Tests                          | Y                  | -       | -         |
| Service Tests                            | Y                  | -       | -         |
| Run automation testing in a pipeline     |                    | Y       | -         |
| Generate Screenshots                     |                    | Y       | -         |
| Extensive UI Testing                     |                    | Y       | -         |
| Time Travel through tests                |                    | Y       | -         |
| View all variations of components easily |                    | -       | Y         |
| Tweak Component Inputs on the fly        |                    | -       | Y         |
| Great for documentation                  |                    | -       | Y         |
| Accessibility Checks                     |                    | -       | Y         |

My rule of thumb is:

| Function                                 | Approach          |
|------------------------------------------|-------------------|
| Logic tests                              | Angular Unit Test |
| Visual tests                             | Cypress Test      |
| Documentation of Component possibilities | Storybook         |

----

### MakeUseOf:
* SassDoc


## Scaffolding

### Components
```shell
component_name=""
ng generate component $component_name --project component-library
```

### Directives
```shell
directive_name="RandomMilkyBackground"
ng generate directive $directive_name --project component-library
```

### Enum
```shell
enum_name="Tailwind_Sizes"
ng generate enum $enum_name --project component-library
```

---

## Schematics
### Component
```shell
ng config projects.component-library.schematics.@schematics/angular:component.addTypeToClassName true
ng config projects.component-library.schematics.@schematics/angular:component.changeDetection OnPush
ng config projects.component-library.schematics.@schematics/angular:component.path projects/component-library/src/components
ng config projects.component-library.schematics.@schematics/angular:component.style scss
ng config projects.component-library.schematics.@schematics/angular:component.type component
```

### Directive
```shell
ng config projects.component-library.schematics.@schematics/angular:directive.addTypeToClassName true
ng config projects.component-library.schematics.@schematics/angular:directive.flat false
ng config projects.component-library.schematics.@schematics/angular:directive.path projects/component-library/src/directives
ng config projects.component-library.schematics.@schematics/angular:directive.type directive
```

### Pipe
```shell
ng config projects.component-library.schematics.@schematics/angular:pipe.flat false
ng config projects.component-library.schematics.@schematics/angular:pipe.path projects/component-library/src/pipes
ng config projects.component-library.schematics.@schematics/angular:pipe.typeSeparator .
```

### Enum
```shell
ng config projects.component-library.schematics.@schematics/angular:enum.path projects/component-library/src/enums
ng config projects.component-library.schematics.@schematics/angular:enum.type enum
```

---

## TODO:
* [ ] https://vitest.dev/guide/browser/
* [ ] avatar small images: https://picsum.photos/
* [ ] avatar not square aspect ratio https://picsum.photos/
* [ ] baseline background
* [ ] User Tile text does not adjust to the avatar size
* [ ] Avatar, Avatar-Group, Baseline and User Tile all use very similar inputs to avatar, find a better way
