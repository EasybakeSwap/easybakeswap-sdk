// import JSBI from 'jsbi'

// export const FACTORY_ADDRESS = '0x77e43eEA4e7d475676d1af631A641C12BEE4dcE3' // UPDATED FOR EASYBAKE ON RINKEBY

// export const INIT_CODE_HASH = '0x2fa24360e94016b16eb8d287f3dbc67b96423c6acdb8590dd8e1f007fb6848d9' // UPDATED FOR EASYBAKE ON RINKEBY

// export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// // exports for internal consumption
// export const ZERO = JSBI.BigInt(0)
// export const ONE = JSBI.BigInt(1)
// export const TWO = JSBI.BigInt(2)
// export const THREE = JSBI.BigInt(3)
// export const FIVE = JSBI.BigInt(5)
// export const TEN = JSBI.BigInt(10)
// export const _100 = JSBI.BigInt(100)
// export const _997 = JSBI.BigInt(997)
// export const _998 = JSBI.BigInt(998)
// export const _1000 = JSBI.BigInt(1000)

// // exports for external consumption
// export type BigintIsh = JSBI | bigint | string

// export enum ChainId {
//   MAINNET = 1,
//   RINKEBY = 4
// }

// export enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }

// export enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }

// export enum SolidityType {
//   uint8 = 'uint8',
//   uint256 = 'uint256'
// }

// export const SOLIDITY_TYPE_MAXIMA = {
//   [SolidityType.uint8]: JSBI.BigInt('0xff'),
//   [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
// }

// export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  // ROPSTEN = 3,
  RINKEBY = 4
  // GÖRLI = 5,
  // KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x77e43eEA4e7d475676d1af631A641C12BEE4dcE3'

export const INIT_CODE_HASH = '0x2fa24360e94016b16eb8d287f3dbc67b96423c6acdb8590dd8e1f007fb6848d9'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
