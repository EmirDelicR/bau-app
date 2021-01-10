# TODO

[x] add typescript
[X] add linting and formatting
[] add swagger
[] add sentry
[] add unit test
[] add file for logs (write logs to file)
[] add user permissions (docker)
[] fix docker
[] add database
[] add error handling
[] add helmet
[] add postman request
[] create logger using console.log
[] add file upload

[] add routes

    /login POST
    /pdf GET, POST, PUT
    /pdf/:pdfId GET
    /marker/ POST, GET
    /draw/ GET, POST
    /chat/
    /location/ POST, PUT, GET

## typescript

```console
npm install -D typescript tslint types/express
```

In tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": ["es6"],
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "src",

    "strict": true,

    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

Add **start** script

```js
"start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/app.ts",
```

## ES linting

[ES Article](https://sourcelevel.io/blog/how-to-setup-eslint-and-prettier-on-node)

```console
npx eslint --init
```

#### prettier.config.js

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["prettier", "airbnb-base"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["prettier", "@typescript-eslint"],
  "rules": {
    "prettier/prettier": "error",
    "import/extensions": [{ "ts": "never" }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts"],
        "paths": ["src"]
      }
    }
  }
}
```

Add prettier extension for VSCode and install in project

```console
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Go to VSCode setting search for Default Formatter and add **_ebsenp.prettier-vscode_**

Add prettier.config.js file

```js
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
};
```
