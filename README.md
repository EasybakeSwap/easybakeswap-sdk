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
 PASS  src/entities/fractions/currencyAmount.test.ts
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

- FACTORY_ADDRESS = "0xD294Ca2800957021DC486F1959AF022b0B4FCcab";
  = INIT_CODE_HASH = "0x2fa24360e94016b16eb8d287f3dbc67b96423c6acdb8590dd8e1f007fb6848d9";
- _WETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";