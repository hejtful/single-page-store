## Notes

No memoization is used, since for an app this small, it wouldn't bring any performance improvements.
Also, no code splitting and lazy loading is used since showing and hiding loaders would be slower
than loading the whole app at once.

Cypress integration tests only cover the "happy path", it would definitely be good to also add edge cases
like form validation.

## Project setup

To install the dependencies, you can run:

### `yarn`

To run the app in development mode:

### `yarn start`

To build the project for production:

### `yarn build`

To run unit tests:

### `yarn test`

To run integration tests in UI:

### `yarn cy:open`

To run integration tests in CLI:

### `yarn cy:run`
