import { Solanaish } from '../chains/solana/solana';
import { Serumish } from '../connectors/serum/serum';
import * as serumControllers from '../connectors/serum/serum.controllers';
import { ResponseWrapper } from '../services/common-interfaces';
import {getChain, getConnector} from '../services/connection-manager';
import {
  ClobDeleteOrdersRequest,
  ClobDeleteOrdersResponse,
  ClobGetFilledOrdersRequest,
  ClobGetFilledOrdersResponse,
  ClobGetMarketsRequest,
  ClobGetMarketsResponse,
  ClobGetOpenOrdersRequest,
  ClobGetOpenOrdersResponse,
  ClobGetOrderBooksRequest,
  ClobGetOrderBooksResponse,
  ClobGetOrdersRequest,
  ClobGetOrdersResponse,
  ClobGetTickersRequest,
  ClobGetTickersResponse,
  ClobPostOrdersRequest,
  ClobPostOrdersResponse,
  ClobPostSettleFundsRequest,
  ClobPostSettleFundsResponse,
} from './clob.requests';

/**
 * GET /clob/getMarkets
 *
 * @param request
 */
export async function getMarkets(
  request: ClobGetMarketsRequest
): Promise<ResponseWrapper<ClobGetMarketsResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getMarkets(chain, connector, request);
}

/**
 * GET /clob/getOrderBooks
 *
 * @param request
 */
export async function getOrderBooks(
  request: ClobGetOrderBooksRequest
): Promise<ResponseWrapper<ClobGetOrderBooksResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getOrderBooks(chain, connector, request);
}

/**
 * GET /clob/getTickers
 *
 * @param request
 */
export async function getTickers(
  request: ClobGetTickersRequest
): Promise<ResponseWrapper<ClobGetTickersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getTickers(chain, connector, request);
}

/**
 * GET /clob/getOrders
 *
 * @param request
 */
export async function getOrders(
  request: ClobGetOrdersRequest
): Promise<ResponseWrapper<ClobGetOrdersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getOrders(chain, connector, request);
}

/**
 * POST /clob/createOrders
 *
 * @param request
 */
export async function createOrders(
  request: ClobPostOrdersRequest
): Promise<ResponseWrapper<ClobPostOrdersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.createOrders(chain, connector, request);
}

/**
 * DELETE /clob/cancelOrders
 *
 * @param request
 */
export async function cancelOrders(
  request: ClobDeleteOrdersRequest
): Promise<ResponseWrapper<ClobDeleteOrdersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.cancelOrders(chain, connector, request);
}

/**
 * GET /clob/getOpenOrders
 *
 * @param request
 */
export async function getOpenOrders(
  request: ClobGetOpenOrdersRequest
): Promise<ResponseWrapper<ClobGetOpenOrdersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getOpenOrders(chain, connector, request);
}

/**
 * GET /clob/getFilledOrders
 *
 * @param request
 */
export async function getFilledOrders(
  request: ClobGetFilledOrdersRequest
): Promise<ResponseWrapper<ClobGetFilledOrdersResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.getFilledOrders(chain, connector, request);
}

/**
 * Settle funds for one or more markets.
 *
 * POST /clob/settleFunds
 *
 * @param request
 */
export async function settleFunds(
  request: ClobPostSettleFundsRequest
): Promise<ResponseWrapper<ClobPostSettleFundsResponse>> {
  const chain: Solanaish = (await getChain(request.chain, request.network)) as Solanaish;
  const connector: Serumish = (await getConnector(
    request.chain,
    request.network,
    request.connector
  )) as Serumish;

  return serumControllers.settleFunds(chain, connector, request);
}
