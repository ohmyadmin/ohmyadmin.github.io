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
* Logic tests -> Angular Unit Test
* Visual tests -> Cypress Test
* Documentation of possibilities of Component -> Storybook

----

### MakeUseOf:
* SassDoc
