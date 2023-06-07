# Tabulated Data React App

This is a template React App I created to display data as a table. The data is fetched via a DatastoreProvider.

## Folder Structure
- core: defines interfaces and models for the entire app
- mock: defines MockAppProvider and MockDatastoreProvider to serve a singleton instance of an app, and an interface with the mock/stub datastore, respectively.
- tests: [jestjs](https://jestjs.io/docs/getting-started) tests. Tests are configured to run with typescript and babel.
- webapp: the React application

## Running Tests

You can run tests in VSCode via the Testing menu, or by running `npm run tests` in the [tests](./tests) folder.

## Running the React App

There are launch options in VSCode to run the mock and non-mock versions of the app.

You can also run the app in the [webapp](./webapp/) folder by running:

```shell
export REACT_APP_USE_MOCK=true # set this to true to use mock.
npm run start
```

To build the app, please run `npm run build`.