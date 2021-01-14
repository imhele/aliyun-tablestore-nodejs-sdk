import { EventEmitter } from 'events';
import { HttpRequest } from '../http';

export interface XHRClient {
  finishRequest(xhr: XMLHttpRequest, emitter: EventEmitter): void;
  handleRequest(
    httpRequest: HttpRequest,
    httpOptions: { timeout?: number },
    callback: (emitter: EventEmitter) => void,
    errCallback: (error: Error) => void,
  ): EventEmitter;
  parseHeaders(rawHeaders: string): { [key: string]: string };
}

export interface XHRClientConstructor {
  new (): XHRClient;
};
