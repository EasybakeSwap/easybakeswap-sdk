# EasyBakeSwap SDK

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/easybakeswap/easybakeswap-sdk.git
```

Move into the easybakeswap-sdk working directory

```sh
cd easybake-swap-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.4
$ tsdx test
 PASS  test/sortedInsert.test.ts
 PASS  test/validateAndParseAddress.test.ts
 PASS  test/token.test.ts
 PASS  test/currencyAmount.test.ts
 PASS  test/fraction.test.ts
 PASS  test/constants.test.ts
 PASS  test/route.test.ts
 PASS  test/router.test.ts
 PASS  test/pair.test.ts
 PASS  test/trade.test.ts
 PASS  test/entities.test.ts
 PASS  test/tokenAmount.test.ts
 PASS  test/sqrt.test.ts

Test Suites: 1 skipped, 13 passed, 13 of 14 total
Tests:       3 skipped, 137 passed, 140 total
Snapshots:   0 total
Time:        4.68s, estimated 9s
Ran all test suites.
✨  Done in 6.63s.
```

## Factory Address and Code Hash (on Rinkeby)

- FACTORY_ADDRESS = "0x2664b895b5d484de76c621c4bf320f42c2cfe00d";
  = INIT_CODE_HASH = "0xd19e269b2573a69d30524d432a5976519a59906e8744a1b07187c30dc7d27fd0";
- WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
- ROUTER = "0x01cc4ae463325689ea73a4dc9ee8c6583e8a68b7";
