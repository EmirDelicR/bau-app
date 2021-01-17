import { ISwaggerMainDocument } from 'src/interfaces/swagger';
import { login } from 'src/swagger/routes/auth';

export const swaggerDocument: ISwaggerMainDocument = {
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
      url: 'http://localhost:3100/api/v1',
      description: 'Local server',
    },
    {
      url: 'https://app-dev.herokuapp.com/api/v1',
      description: 'DEV Env',
    },
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
