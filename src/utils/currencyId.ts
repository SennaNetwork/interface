import { Currency, ETHER, Token } from '@sennanetwork/uniswap-v2-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'SEN'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
