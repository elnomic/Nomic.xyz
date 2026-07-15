import { useState } from 'react'
import { ArrowUp, ArrowDown, Settings } from 'lucide-react'

export function Trade() {
  const [selectedPair, setSelectedPair] = useState('BTC')
  const [leverage, setLeverage] = useState(10)
  const [amount, setAmount] = useState('')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [limitPrice, setLimitPrice] = useState('')
  const [side, setSide] = useState<'long' | 'short' | null>(null)

  const pairs = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$67,234.50', change: '+2.34%', color: '#F7931A' },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,456.78', change: '+1.87%', color: '#627EEA' },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold">Trade</h1>
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {pairs.map((pair) => (
            <button
              key={pair.symbol}
              onClick={() => setSelectedPair(pair.symbol)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedPair === pair.symbol
                  ? 'bg-primary/20 border border-primary text-text-primary'
                  : 'bg-surface border border-transparent text-text-secondary hover:bg-surface-elevated'
              }`}
            >
              <span className="font-bold">{pair.symbol}</span>
              <span className="text-xs text-text-secondary">/USDC</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Trading Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Left: Chart (placeholder) */}
        <div className="xl:col-span-2 glass-panel p-4 min-h-[300px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-text-secondary">📊 Price Chart</p>
            <p className="text-sm text-text-secondary mt-1">TradingView integration coming soon</p>
          </div>
        </div>

        {/* Right: Order Form */}
        <div className="glass-panel p-4">
          <div className="space-y-4">
            {/* Price Display */}
            <div className="text-center border-b border-white/5 pb-3">
              <p className="text-2xl font-mono font-bold">$67,234.50</p>
              <p className="text-sm text-success">+2.34% (24h)</p>
            </div>

            {/* Leverage Slider */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-secondary">Leverage</span>
                <span className="font-bold text-primary">{leverage}x</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={leverage}
                onChange={(e) => setLeverage(Number(e.target.value))}
                className="w-full h-1 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>1x</span>
                <span>50x</span>
              </div>
            </div>

            {/* Order Type Toggle */}
            <div className="flex gap-1 bg-surface rounded-lg p-1">
              {['market', 'limit'].map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type as any)}
                  className={`flex-1 py-1.5 text-sm rounded-md capitalize transition-all ${
                    orderType === type
                      ? 'bg-surface-elevated text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Limit Price Input (conditional) */}
            {orderType === 'limit' && (
              <div>
                <label className="text-xs text-text-secondary">Limit Price</label>
                <input
                  type="number"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  placeholder="Enter limit price"
                  className="input-primary w-full mt-1"
                />
              </div>
            )}

            {/* Amount Input */}
            <div>
              <label className="text-xs text-text-secondary">Amount (USDC)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="input-primary w-full mt-1"
              />
              <div className="flex gap-2 mt-1">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    className="flex-1 py-0.5 text-xs bg-surface-elevated hover:bg-surface-elevated/80 rounded transition-all"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Long/Short Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSide('long')}
                className={`py-2.5 rounded-lg font-semibold transition-all ${
                  side === 'long'
                    ? 'bg-success text-white'
                    : 'bg-success/10 text-success hover:bg-success/20'
                }`}
              >
                <ArrowUp className="w-4 h-4 inline mr-1" />
                Long
              </button>
              <button
                onClick={() => setSide('short')}
                className={`py-2.5 rounded-lg font-semibold transition-all ${
                  side === 'short'
                    ? 'bg-danger text-white'
                    : 'bg-danger/10 text-danger hover:bg-danger/20'
                }`}
              >
                <ArrowDown className="w-4 h-4 inline mr-1" />
                Short
              </button>
            </div>

            {/* Order Summary */}
            {side && amount && (
              <div className="bg-surface-elevated/50 rounded-lg p-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Position Size</span>
                  <span className="font-mono">${Number(amount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Leverage</span>
                  <span className="font-mono">{leverage}x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Margin Required</span>
                  <span className="font-mono">${(Number(amount) / leverage).toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-text-secondary">Liquidation Price</span>
                  <span className="font-mono text-danger">$61,234.50</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              disabled={!side || !amount}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                side === 'long'
                  ? 'bg-success hover:bg-success/80 text-white'
                  : side === 'short'
                  ? 'bg-danger hover:bg-danger/80 text-white'
                  : 'bg-surface-elevated text-text-secondary cursor-not-allowed'
              }`}
            >
              {side ? `${side.toUpperCase()} ${selectedPair}/USDC` : 'Select Direction'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
            }
