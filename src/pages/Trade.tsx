import { useState } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface TradeProps {
  navigate?: (page: string) => void
}

export function Trade({ navigate }: TradeProps) {
  const [selectedPair, setSelectedPair] = useState('BTC')
  const [leverage, setLeverage] = useState(10)
  const [amount, setAmount] = useState('')
  const [side, setSide] = useState<'long' | 'short' | null>(null)

  const pairs = [
    { symbol: 'BTC', name: 'Bitcoin', price: '67,234.50', change: '+2.34%' },
    { symbol: 'ETH', name: 'Ethereum', price: '3,456.78', change: '+1.87%' },
  ]

  return (
    <div>
      {/* Back Button */}
      <button 
        onClick={() => navigate?.('home')}
        className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-2xl font-bold mb-4">📈 Trade</h1>

      {/* Pair Selector */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {pairs.map((pair) => (
          <button
            key={pair.symbol}
            onClick={() => setSelectedPair(pair.symbol)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedPair === pair.symbol
                ? 'bg-primary/20 border border-primary'
                : 'bg-surface border border-transparent hover:bg-surface-elevated'
            }`}
          >
            <span className="font-bold">{pair.symbol}</span>
            <span className="text-xs text-text-secondary ml-1">/USDC</span>
          </button>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart */}
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-text-secondary">Price Chart</p>
            <p className="text-xs text-text-secondary mt-1">Coming soon</p>
          </div>
        </div>

        {/* Order Form */}
        <div className="glass-panel p-4 space-y-4">
          {/* Price */}
          <div className="text-center border-b border-white/5 pb-3">
            <p className="text-2xl font-mono font-bold">$67,234.50</p>
            <p className="text-sm text-success">+2.34% (24h)</p>
          </div>

          {/* Leverage */}
          <div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Leverage</span>
              <span className="font-bold text-primary">{leverage}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-text-secondary">
              <span>1x</span>
              <span>25x</span>
              <span>50x</span>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="text-sm text-text-secondary">Amount (USDC)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="input-primary w-full mt-1"
            />
            <div className="flex gap-1 mt-1">
              {[25, 50, 75, 100].map((pct) => (
                <button
                  key={pct}
                  className="flex-1 py-1 text-xs bg-surface-elevated hover:bg-surface-elevated/80 rounded"
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Long/Short */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setSide('long')}
              className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 ${
                side === 'long'
                  ? 'bg-success text-white'
                  : 'bg-success/10 text-success hover:bg-success/20'
              }`}
            >
              <ArrowUp className="w-4 h-4" /> Long
            </button>
            <button
              onClick={() => setSide('short')}
              className={`py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 ${
                side === 'short'
                  ? 'bg-danger text-white'
                  : 'bg-danger/10 text-danger hover:bg-danger/20'
              }`}
            >
              <ArrowDown className="w-4 h-4" /> Short
            </button>
          </div>

          {/* Submit */}
          <button
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              side === 'long'
                ? 'bg-success hover:bg-success/80 text-white'
                : side === 'short'
                ? 'bg-danger hover:bg-danger/80 text-white'
                : 'bg-surface-elevated text-text-secondary cursor-not-allowed'
            }`}
            disabled={!side || !amount}
          >
            {side ? `${side.toUpperCase()} ${selectedPair}/USDC` : 'Select Direction'}
          </button>
        </div>
      </div>
    </div>
  )
            }
