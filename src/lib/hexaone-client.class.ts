import axios, { AxiosRequestConfig } from 'axios';

import {
  GetAccountResponse,
  GetAccessLogResponse,
  GetCurrenciesResponse,
  GetItemsResponse,
  GetPricesResponse,
  GetListingsResponse,
  GetProfileResponse,
  GetInventoryResponse,
} from './hexaone-client.interface';

export class HexaoneClient {
  public readonly BASE_URL = 'https://api.hexa.one';

  public axiosRef = axios.create({
    baseURL: this.BASE_URL,
    headers: { 'X-API-Key': this.apikey },
  });

  constructor(private readonly apikey: string) {}

  /**
   * Get your hexa.one account
   *
   * @return {GetAccountResponse}
   * @memberof HexaoneClient
   */
  public getAccount(config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetAccountResponse>('/api/account', config);
  }

  /**
   * Get your hexa.one access log
   *
   * @return {GetAccessLogResponse}
   * @memberof HexaoneClient
   */
  public getAccessLog(config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetAccessLogResponse>('/api/access', config);
  }

  /**
   * Get fx conversion rates for a certain currency
   *
   * @param {string} code - Currency code (e.g. USD)
   * @return {GetCurrenciesResponse}
   * @memberof HexaoneClient
   */
  public getCurrencies(code: string, config?: AxiosRequestConfig) {
    const test = this.axiosRef.get<GetCurrenciesResponse>(
      `/market/currencies${code && `/${code}`}`,
      config
    );

    return test;
  }

  /**
   * Get all items of a certain app
   *
   * @param {string} appId - Steam app id (e.g. 730 for CS:GO)
   * @return {GetItemsResponse}
   * @memberof HexaoneClient
   */
  public getItems(appId: number | string, config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetItemsResponse>(
      `/market/items/${appId}`,
      config
    );
  }

  /**
   * Get prices for all items of a certain app
   *
   * @param {string} appId - Steam app id (e.g. 730 for CS:GO)
   * @return {GetPricesResponse}
   * @memberof HexaoneClient
   */
  public getPrices(appId: number | string, config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetPricesResponse>(
      `/market/prices/${appId}`,
      config
    );
  }

  /**
   * Get listings for all items of a certain app
   *
   * @param {string} appId - Steam app id (e.g. 730 for CS:GO)
   * @return {GetListingsResponse}
   * @memberof HexaoneClient
   */
  public getListings(appId: number | string, config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetListingsResponse>(
      `/market/listings/${appId}`,
      config
    );
  }

  /**
   * Get profile of a steam user
   *
   * @param {string} steamId64 - Steam ID in SID64 format (e.g. 76561198061661326)
   * @return {GetProfileResponse}
   * @memberof HexaoneClient
   */
  public getProfile(steamId64: string, config?: AxiosRequestConfig) {
    return this.axiosRef.get<GetProfileResponse>(
      `/user/profile/${steamId64}`,
      config
    );
  }

  /**
   * Get inventory of a steam user for a certain app and context
   *
   * @param {string} steamId64 - Steam ID in SID64 format (e.g. 76561198061661326)
   * @param {string} appId - Steam app id (e.g. 730 for CS:GO)
   * @param {string} contextId - Steam Inventory context (e.g. 2 for CS:GO)
   * @return {GetInventoryResponse}
   * @memberof HexaoneClient
   */
  public getInventory(
    steamId64: string,
    appId: number | string,
    contextId: number | string,
    config?: AxiosRequestConfig
  ) {
    return this.axiosRef.get<GetInventoryResponse>(
      `/user/inventory/${steamId64}/${appId}/${contextId}`,
      config
    );
  }
}
