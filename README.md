### Linting
```shell
ng add @angular-eslint/schematics
```

### Vitest Angular Browser Testing
```shell
# for migrating from jasmine tests to vitest
ng g @schematics/angular:refactor-jasmine-vitest --add-imports
# touch touch projects/component-library/vitest.config.ts
# disable globals using the vitest define config
npm install -D @vitest/browser-playwright
ng config projects.component-library.architect.test.options.browsers.1 "firefox"

npm install @analogjs/platform --save-dev
? ng g @analogjs/platform:setup-vitest --project component-library
```

---

## TODO:
* [ ] https://vitest.dev/guide/browser/
* [ ] User Tile text does not adjust to the avatar size
* [ ] Avatar, Avatar-Group, Baseline and User Tile all use very similar inputs to avatar, find a better way
* [ ] Code Coverage Cypress?
* [ ] Code Coverage report artifact
* [ ] Diagonal stack
* [ ] GitHub Actions Bot
* [ ] precommit
* [ ] Colorful Icon Library
  * [ ] Google Chrome
  * [ ] Firefox
  * [ ] Edge
  * [ ] Safari
