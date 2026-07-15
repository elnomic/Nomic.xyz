// src/config/constants.ts
export const TRADING_PAIRS = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', color: '#F7931A' },
  { symbol: 'ETH', name: 'Ethereum', icon: '⟠', color: '#627EEA' },
] as const

export const MAX_LEVERAGE = 50
export const MIN_LEVERAGE = 1
export const DEFAULT_LEVERAGE = 10

export const SUPPORTED_WALLETS = [
  { name: 'MetaMask', icon: '🦊', id: 'metamask' },
  { name: 'WalletConnect', icon: '🔗', id: 'walletconnect' },
  { name: 'Coinbase', icon: '🟦', id: 'coinbase' },
] as const

export const CHART_INTERVALS = [
  { label: '1m', value: '1m' },
  { label: '5m', value: '5m' },
  { label: '15m', value: '15m' },
  { label: '1h', value: '1h' },
  { label: '4h', value: '4h' },
  { label: '1d', value: '1d' },
] as const
