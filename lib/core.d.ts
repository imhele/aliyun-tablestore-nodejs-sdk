import {
  EndpointConstructor,
  HttpClientConstructor,
  HttpRequestConstructor,
  HttpResponseConstructor,
} from './http';
import { NodeHttpClientConstructor } from './http/node';
import { XHRClientConstructor } from './http/xhr';
import {
  QueryType,
  ScoreMode,
  SortOrder,
  SortMode,
  FieldType,
  ColumnReturnType,
  GeoDistanceType,
  IndexOptions,
  QueryOperator,
} from './search';
import { SignerConstructor } from './signer';
import { util } from './util';

declare const TableStore: {
  Endpoint: EndpointConstructor;
  HttpClient: HttpClientConstructor;
  HttpRequest: HttpRequestConstructor;
  HttpResponse: HttpResponseConstructor;
  NodeHttpClient: NodeHttpClientConstructor;
  Signer: SignerConstructor;
  XHRClient: XHRClientConstructor;
  util: util;

  /** search - start */
  QueryType: QueryType;
  ScoreMode: ScoreMode;
  SortOrder: SortOrder;
  SortMode: SortMode;
  FieldType: FieldType;
  ColumnReturnType: ColumnReturnType;
  GeoDistanceType: GeoDistanceType;
  IndexOptions: IndexOptions;
  QueryOperator: QueryOperator;
  /** search - end */
};

export = TableStore;
