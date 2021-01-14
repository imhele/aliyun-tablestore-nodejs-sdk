import { UrlWithStringQuery } from 'url';
import { NodeHttpClient } from './http/node';
import { XHRClient } from './http/xhr';

export interface Endpoint extends UrlWithStringQuery {
  port: number;
}

export interface EndpointConstructor {
  new (endpoint: string): Endpoint;
}

export interface HttpRequest {
  _streaming?: boolean;
  body: Buffer | string;
  debug(): void;
  endpoint: Endpoint;
  headers: { [key: string]: string };
  method: string;
  path: string;
  pathname(): string;
  region?: string;
  search(): string;
  stream?: ClientRequest | XMLHttpRequest;
}

export interface HttpRequestConstructor {
  new (endpoint: Endpoint, region?: string): HttpRequest;
}

export interface HttpResponse {
  buffers?: Buffer[];
  body?: Buffer;
  headers: { [key: string]: string };
  numBytes?: number;
  statusCode?: number;
}

export interface HttpResponseConstructor {
  new (): HttpResponse;
}

export type HttpClientConstructor =
  | {
      new (): NodeHttpClient;
      getInstance(): NodeHttpClient;
      singleton?: NodeHttpClient;
      streamsApiVersion: 1 | 2;
    }
  | {
      new (): XHRClient;
      getInstance(): XHRClient;
      singleton?: XHRClient;
      streamsApiVersion: 1;
    };
