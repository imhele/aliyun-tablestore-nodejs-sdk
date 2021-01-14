import { ClientRequest, IncomingMessage } from 'http';
import { Agent, RequestOptions } from 'https';
import { Readable as ReadableStream, Writable as WritableStream } from 'stream';
import { HttpRequest } from '../http';

export interface NodeHttpClient {
  bufferToStream(buffer: string | Buffer): ReadableStream;
  emitter: unknown | null;
  handleRequest(
    httpRequest: HttpRequest,
    httpOptions: (RequestOptions & { maxSockets?: number; timeout?: number }) | null | undefined,
    callback: (resp: IncomingMessage) => void,
    errCallback: (error: Error) => void,
  ): ClientRequest;
  progressStream(stream: ClientRequest, httpRequest: HttpRequest): WritableStream;
  sslAgent: Agent | (() => Agent);
  writeBody(stream: WritableStream, httpRequest: HttpRequest): void;
}

export interface NodeHttpClientConstructor {
  new (): NodeHttpClient;
};
