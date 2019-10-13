# Ultra

> The home of the Ultra design system.

## Packages

The following packages are available.

* [React Native](./packages/ultra-react-native)

## Development

### Build

```bash
yarn build
```

### Automatically build on change

```bash
yarn watch
```

### Work in app and library at the same time

To mount and edit Ultra components and still get hot reloading, someone can use
`wml` to copy any changed lib files into an application `node_modules`
directory. This is possible, as the `yarn watch` task creates all the necessary
library build files.

```bash
yarn global add wml

wml add \
    ~/src/github.com/spurtli/ultra/packages/ultra-react-native \
    ~/src/github.com/spurtli/app/node_modules/@spurtli/ultra-react-native \
wml start

cd ~/src/github.com/spurtli/ultra/packages/ultra-react-native
yarn watch

cd ~/src/github.com/spurtli/app/node_modules/@spurtli/ultra-react-native
yarn start
```
