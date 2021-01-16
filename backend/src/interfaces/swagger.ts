interface ILoginSchema {
  type: string;
  properties: {
    [key: string]: { type: string };
  };
}

interface ISwaggerServer {
  url: string;
  description: string;
}

interface ISwaggerTags {
  name: string;
}

export interface ISwaggerMainDocument {
  swagger: string;
  info: {
    description: string;
    version: string;
    title: string;
    contact: {
      email: string;
    };
    license: {
      name: string;
      url: string;
    };
  };
  servers: ISwaggerServer[];
  tags: ISwaggerTags[];
  paths: {
    [key: string]: { post: ISwaggerRoutes };
  };
}

export interface ILoginRequest {
  in: string;
  name: string;
  description: string;
  required: boolean;
  schema: ILoginSchema;
}

export interface ILoginResponse {
  type: string;
  properties: {
    [key: string]: { type: string; description: string };
  };
}

export interface ISwaggerRoutes {
  tags: string[];
  operationId: string;
  description: string;
  produces: string[];
  parameters: ILoginRequest[];
  responses: {
    [key: string]: { description: string; schema: ILoginResponse };
  };
}
