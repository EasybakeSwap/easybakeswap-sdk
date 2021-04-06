import { ChainId, MaxUint256 } from '../src/constants'
import { Token } from '../src/entities/token'
import TokenAmount from '../src/entities/fractions/tokenAmount'

describe('TokenAmount', () => {
  const ADDRESS_ONE = '0x0000000000000000000000000000000000000001'

  it('token amount can be max uint256', () => {
    const amount = new TokenAmount(new Token(ChainId.MAINNET, ADDRESS_ONE, 18), MaxUint256)
    expect(amount.raw).toEqual(MaxUint256)
  })
})
