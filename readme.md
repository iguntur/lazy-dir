# lazy-dir

> Lazy define current directory

[![Travis CI](https://img.shields.io/travis/iguntur/lazy-dir.svg?style=flat-square)](https://travis-ci.org/iguntur/lazy-dir)
[![node](https://img.shields.io/node/v/lazy-dir.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/lazy-dir.svg?style=flat-square)](https://www.npmjs.org/package/lazy-dir)
[![PRs](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat-square)]()

---

## Install

```console
$ npm install lazy-dir
```

## Usage

```js
const dir = require('lazy-dir')(module);

console.log(dir.here());
//=> /path/to/project/awesome

console.log(dir.here('foo', 'bar'));
//=> /path/to/project/awesome/foo/bar
```

## API

### require('lazy-dir')(`module`);

- Params:
    - `module`: `<NodeJS.Module>` _(required)_
- Returns: `<object>`

#### .pwd(`[...paths]`)

- Params:
    - `...paths`: `<string[]>` _(optional)_
- Returns: `<string>`
- Example:
    ```js
    dir.pwd('a', 'b', 'c'); // eq: path.resolve(process.cwd(), 'a', 'b', 'c')
    ```

#### .here(`[...paths]`)

- Params:
    - `...paths`: `<string[]>` _(optional)_
- Returns: `<string>`
- Example:
    ```js
    dir.here('a', 'b', 'c'); // eq: path.resolve(__dirname, 'a', 'b', 'c')
    ```


## License

MIT © [Guntur Poetra](http://github.com/iguntur)
