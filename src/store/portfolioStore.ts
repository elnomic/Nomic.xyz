// src/store/portfolioStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Position {
  id: string
  asset: string
  side: 'long' | 'short'
  size: number
  entryPrice: number
  currentPrice: number
  leverage: number
  pnl: number
  pnlPercentage: number
  liquidationPrice: number
}

interface Order {
  id: string
  asset: string
  type: 'limit' | 'stop' | 'take-profit'
  side: 'buy' | 'sell'
  price: number
  size: number
  filled: number
  status: 'open' | 'filled' | 'cancelled'
  createdAt: string
}

interface PortfolioState {
  totalEquity: number
  availableMargin: number
  usedMargin: number
  positions: Position[]
  openOrders: Order[]
  tradingHistory: any[]
  
  setTotalEquity: (equity: number) => void
  setAvailableMargin: (margin: number) => void
  addPosition: (position: Position) => void
  updatePosition: (id: string, updates: Partial<Position>) => void
  removePosition: (id: string) => void
  addOrder: (order: Order) => void
  updateOrder: (id: string, updates: Partial<Order>) => void
  removeOrder: (id: string) => void
  addTrade: (trade: any) => void
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      totalEquity: 100000,
      availableMargin: 80000,
      usedMargin: 20000,
      positions: [
        {
          id: '1',
          asset: 'BTC',
          side: 'long',
          size: 0.5,
          entryPrice: 66000,
          currentPrice: 67000,
          leverage: 10,
          pnl: 500,
          pnlPercentage: 1.5,
          liquidationPrice: 59400,
        }
      ],
      openOrders: [],
      tradingHistory: [],
      
      setTotalEquity: (totalEquity) => set({ totalEquity }),
      setAvailableMargin: (availableMargin) => set({ availableMargin }),
      
      addPosition: (position) => set((state) => ({
        positions: [...state.positions, position]
      })),
      
      updatePosition: (id, updates) => set((state) => ({
        positions: state.positions.map((pos) =>
          pos.id === id ? { ...pos, ...updates } : pos
        )
      })),
      
      removePosition: (id) => set((state) => ({
        positions: state.positions.filter((pos) => pos.id !== id)
      })),
      
      addOrder: (order) => set((state) => ({
        openOrders: [...state.openOrders, order]
      })),
      
      updateOrder: (id, updates) => set((state) => ({
        openOrders: state.openOrders.map((order) =>
          order.id === id ? { ...order, ...updates } : order
        )
      })),
      
      removeOrder: (id) => set((state) => ({
        openOrders: state.openOrders.filter((order) => order.id !== id)
      })),
      
      addTrade: (trade) => set((state) => ({
        tradingHistory: [trade, ...state.tradingHistory]
      })),
    }),
    {
      name: 'nomic-portfolio-storage',
    }
  )
)
