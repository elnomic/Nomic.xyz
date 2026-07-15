// src/store/tradingStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TradingState {
  selectedPair: string
  leverage: number
  amount: string
  side: 'long' | 'short' | null
  orderType: 'market' | 'limit'
  limitPrice: string
  
  setSelectedPair: (pair: string) => void
  setLeverage: (leverage: number) => void
  setAmount: (amount: string) => void
  setSide: (side: 'long' | 'short' | null) => void
  setOrderType: (type: 'market' | 'limit') => void
  setLimitPrice: (price: string) => void
  resetOrder: () => void
}

export const useTradingStore = create<TradingState>()(
  persist(
    (set) => ({
      selectedPair: 'BTC',
      leverage: 10,
      amount: '',
      side: null,
      orderType: 'market',
      limitPrice: '',
      
      setSelectedPair: (pair) => set({ selectedPair: pair }),
      setLeverage: (leverage) => set({ leverage }),
      setAmount: (amount) => set({ amount }),
      setSide: (side) => set({ side }),
      setOrderType: (orderType) => set({ orderType }),
      setLimitPrice: (limitPrice) => set({ limitPrice }),
      resetOrder: () => set({ 
        amount: '', 
        side: null, 
        limitPrice: '',
        orderType: 'market'
      }),
    }),
    {
      name: 'nomic-trading-storage',
    }
  )
)

// Price data store
interface PriceState {
  prices: Record<string, { price: number; change24h: number }>
  setPrice: (symbol: string, price: number, change24h: number) => void
  getPrice: (symbol: string) => number
}

export const usePriceStore = create<PriceState>((set, get) => ({
  prices: {
    BTC: { price: 67000, change24h: 2.5 },
    ETH: { price: 3500, change24h: 1.8 },
  },
  
  setPrice: (symbol, price, change24h) => {
    set((state) => ({
      prices: { ...state.prices, [symbol]: { price, change24h } }
    }))
  },
  
  getPrice: (symbol) => {
    return get().prices[symbol]?.price || 0
  },
}))
