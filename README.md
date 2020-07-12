## Notes

I had a doubt about what to do when an item, that is already added to the cart, is changed or removed from
the inventory. I decided to automatically update the cart and notify the user in order to:

1. Avoid a backend error on form submit if the item is no longer available.
2. Avoid user being angry when the app charges more than the user expected.
3. Potentially notify the user right away about a replacement product.

`useReducer` hooks extracted as custom hooks are used for state management. For an app with a more complex
component structure, I would utilize React Context to avoid prop drilling. For an app with a more complex
state, I would use Redux with Redux Toolkit.

No memoization is used, since for an app this small, it wouldn't bring any performance improvements.
First candidate for memoization, if it turns out the app needs to handle a big amount of products,
would be `items` properties set in `App.js`, to avoid `Object.values` being called on each render.

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
