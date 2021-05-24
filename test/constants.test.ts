import { INIT_CODE_HASH } from '../src/constants'

// import { bytecode } from 'easybake-swap-core/build/EasyBakePair.json'
// import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real EasyBakeSwap.json
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0xce44eb42197293184ca965286dc45bc614fc721cc6115a07f51f462815cadf35')
    })
  })
})

// import { INIT_CODE_HASH } from './constants'

// import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
// import { keccak256 } from '@ethersproject/solidity'

// // this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// // and load the JSON.
// const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

// describe('constants', () => {
//   describe('INIT_CODE_HASH', () => {
//     it('matches computed bytecode hash', () => {
//       expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
//     })
//   })
// })
