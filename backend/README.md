# TODO

[X] add typescript
[X] add config import path
[X] add linting and formatting
[X] add swagger
[] add sentry
[] add unit test
[] add file for logs (write logs to file)
[] add user permissions (docker)
[] fix docker
[] add database
[] add error handling
[] add helmet
[] add postman request
[] add Redis
[] add Rabbit MQ
[] add GIT pipeline (CD/CI)
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

## Path config

```console
npm install --save-dev tsconfig-paths
```

In tsconfig.json

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "src/*": ["src/*"]
    }
  }
}
```

Add script in package.json

```js
"scripts": {
  "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' -r tsconfig-paths/register src/app.ts",
},
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

## swagger

```console
npm i swagger-jsdoc swagger-ui-express

```

#### Add swagger to code

```js
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger/swagger';

const registerRoutes = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
```

#### Document routes

You can create a **_.json_** or use **_.ts_** and separate routes documentation as is made in this setup.

Add swagger main document.

```js
export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'API Documentation for NodeJS API project',
    version: '1.0.0',
    title: 'NODE API',
    contact: {
      email: 'test@test.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      // you can fetch from process.env and set one url
      url: 'http://localhost:3100/api/v1',
      description: 'Local server',
    },
    {
      url: 'https://app-dev.herokuapp.com/api/v1',
      description: 'DEV Env',
    },
  ],
};
```

Add document for specific route

```js
const loginRequest = {
  in: 'body',
  name: 'body',
  description: 'User login parameters',
  required: true,
  schema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
};

const loginResponse = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'Response message',
    },
    status: {
      type: 'integer',
      description: 'Response status code',
    },
  },
};

export const login = {
  tags: ['Login'],
  operationId: 'login',
  description: 'Login user',
  produces: ['application/json'],
  parameters: [loginRequest],
  responses: {
    200: {
      description: 'Success!',
      schema: loginResponse,
    },
    400: {
      description: 'Invalid status value!',
      schema: loginResponse,
    },
    404: {
      description: 'User not found!',
      schema: loginResponse,
    },
  },
};
```

Add document of specific route to main document

```js
import { login } from './routes/auth';

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    // ...
  },
  servers: [
    // ...
  ],
  tags: [
    {
      name: 'Login',
    },
  ],
  paths: {
    '/login': {
      post: login,
    },
  },
};
```

Start server and go to **_/api-dock_**

## sentry

[Sentry](https://docs.sentry.io/platforms/node/guides/express/)

// https://stackoverflow.com/questions/62048610/using-sentry-with-a-custom-error-handler-in-express

https://codeburst.io/sentry-error-reporting-by-example-part-1-999b2df11556

https://docs.bitnami.com/tutorials/build-deploy-monitor-express-application-kubernetes-bitnami-sentry/
