# HEXA.ONE API Client
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## About

A typesafe client to interact with the [HEXA.ONE](https://hexa.one) API endpoints.

## Installation

```bash
$ npm i @rambotrades/hexaone-client
```

## Usage

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6305874-f8efce31-bc83-40ee-a9c8-a116104e0a51?action=collection%2Ffork&collection-url=entityId%3D6305874-f8efce31-bc83-40ee-a9c8-a116104e0a51%26entityType%3Dcollection%26workspaceId%3D3070131c-a213-4f06-8925-25a719a3f7db)

> :warning: **Disclaimer**: In order to use any available endpoint by [HEXA.ONE](https://hexa.one) you will need a personal `{API_KEY}`

```javascript
import { HexaoneClient } from '@rambotrades/hexaone-client';
```

```javascript
const client = new HexaoneClient('API_KEY'); // <- Put your API_KEY here.
```

```javascript
async function main() {
  const {
    status,
    data: { prices },
  } = await client.getPrices(578080);

  const count = Object.keys(prices).length;

  console.log(`${status} - ${count} item prices`);
}
```

## Error Codes

| Status Code | Message               | Description                                |
| ------------ | --------------------- | ------------------------------------------ |
| 200          | OK                    | The request was received successfully.     |
| 401          | Unauthorized          | Authorization failed.                      |
| 402          | Payment Required      | Unsufficient balance.                      |
| 403          | Forbidden             | Steam privacy settings forbid this action. |
| 404          | Not Found             | The endpoint doesn't exist.                |
| 500          | Internal Server Error | The service is having issues.              |

## More

For more information [join their Discord](https://discord.gg/PFBDVzNW)
