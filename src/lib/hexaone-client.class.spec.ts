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
    const { status, data: account } = await client.getAccount();

    expect(status).toBe(200);
    expect(account).toHaveProperty('result.name');
  });

  it('GET - /market/currencies', async () => {
    const { status, data: account } = await client.getAccount();

    expect(status).toBe(200);
    expect(account).toHaveProperty('result.name');
  });
});
