# Caffeine | Mocha

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Source code naming conventions

In the project we use Angular naming conventions as well as following ones...

- constant
  - **UPPER_CASE_NAME**
    - ex. const APPLE_NAME
  - kebab-case-name.const.ts
    - ex. apple-name.const.ts
- enum
  - **TitleCaseName**
    - ex. enum ApplePieRecipeOption
  - kebab-case-name.enum.ts
    - ex. apple-pie-recipe-option.enum.ts
- type
  - **TitleCaseName** + **Type** postfix
    - ex. type ApplePieType
  - kebab-case-name.type.ts
    - ex. apple-pie.type.ts
- abstract
  - **TitleCaseName** + **Abstract** postfix
    - ex. abstract class PieAbstract
  - kebab-case-name.abstract.ts
    - ex. pie.abstract.ts
- interface
  - **TitleCaseName** + **Interface** postfix
    - ex. interface ApplePieInterface
  - kebab-case-name.interface.ts
    - ex. apple-pie.interface.ts
- mock of Service or Component
  - **TitleCaseName** + {postfix} + **Mock** postfix
    - ApplePieComponentMock
  - kebab-case-name.{postfix}.mock.ts
    - apple-pie.component.mock.ts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
