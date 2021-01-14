import { BinaryLike, KeyObject } from 'crypto';
import { HttpRequest } from './http';

export interface Signer {
  addAuthorization(
    credentials: { accessKeyId: string; secretAccessKey: string; securityToken?: string },
    date?: Date,
  ): void;
  canonicalizedHeaders(): string;
  request: HttpRequest;
  sign(secret: BinaryLike | KeyObject, data: BinaryLike): string;
  stringToSign(): string;
}

export interface SignerConstructor {
  new (request: HttpRequest): Signer;
}
