# HEXA.ONE API Client

## About

A typesafe client to interact with the [HEXA.ONE](https://hexa.one) API endpoints.

## Installation

To install `@rambotrades/hexaone-client`, simply run the following command inside your project root folder:

```bash
$ npm i @rambotrades/hexaone-client
```

## Usage

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6305874-f8efce31-bc83-40ee-a9c8-a116104e0a51?action=collection%2Ffork&collection-url=entityId%3D6305874-f8efce31-bc83-40ee-a9c8-a116104e0a51%26entityType%3Dcollection%26workspaceId%3D3070131c-a213-4f06-8925-25a719a3f7db)

> :warning: **Disclaimer**: In order to use any available endpoint by [HEXA.ONE](https://hexa.one) you will need a personal `{API_KEY}`. Join the [Discord server](https://discord.gg/mWJUMnn6) to get one.

```javascript
const HexaoneClient = require('@rambotrades/hexaone-client');
const client = new HexaoneClient('API_KEY'); // <- Put your API_KEY here.

setImmediate(async () => {
  const {
    status,
    data: { prices },
  } = await client.getPrices(578080);

  const count = Object.keys(prices).length;

  console.log(`${status} - ${count} item prices`);
});

/* OR */
api.getPrices(578080).then(({ status, data: { prices } }) => {
  const count = Object.keys(prices).length;

  console.log(`${status} - ${count} item prices`);
});
```

## Error Codes

[HEXA.ONE](https://hexa.one) only uses the appropriate standard HTTP status codes.

## More

For more information visit [HEXA.ONE](https://hexa.one) or contact [RamboTrades](https://rambotrades.com)
