import {
  ILoginRequest,
  ILoginResponse,
  ISwaggerRoutes,
} from '../../interfaces/swagger';

const loginRequest: ILoginRequest = {
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

const loginResponse: ILoginResponse = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'Response message',
    },
    status: {
      type: 'number',
      description: 'Response status code',
    },
  },
};

export const login: ISwaggerRoutes = {
  tags: ['Login'],
  operationId: 'login',
  description: 'Login user',
  produces: ['application/json'],
  parameters: [loginRequest],
  responses: {
    '200': {
      description: 'Success!',
      schema: loginResponse,
    },
    '400': {
      description: 'Invalid status value!',
      schema: loginResponse,
    },
    '404': {
      description: 'User not found!',
      schema: loginResponse,
    },
  },
};
