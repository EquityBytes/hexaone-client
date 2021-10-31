import { HexaoneClient } from './hexaone-client.class';

describe('HexaoneClientService', () => {
  let client: HexaoneClient;

  beforeEach(async () => {
    client = new HexaoneClient(process.env.HEXAONE_APIKEY);
  });

  it('should be defined', () => {
    expect(client).toBeDefined();
  });

  it('GET - /api/account', async () => {
    const { status, data } = await client.getAccount();

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.name');
  });

  it('GET - /market/currencies/USD', async () => {
    const { status, data } = await client.getCurrencies('USD');

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.currencies.EUR');
  });

  it('GET - /market/items/730', async () => {
    const { status, data } = await client.getItems(730);

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.items.★ Bayonet');
  });

  it('GET - /market/prices/730', async () => {
    const { status, data } = await client.getPrices(730);

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.prices.★ Bayonet');
  });

  it('GET - /market/listings/730', async () => {
    const { status, data } = await client.getListings(730);

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.listings.★ Bayonet');
  });

  it('GET - /user/profile/76561198061661326', async () => {
    const { status, data } = await client.getProfile('76561198061661326');

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.profile.name');
  });

  it('GET - /user/inventory/76561198061661326/730/2', async () => {
    const { status, data } = await client.getInventory(
      '76561198061661326',
      730,
      2
    );

    expect(status).toBe(200);
    expect(data).toHaveProperty('result.inventory');
  });
});
