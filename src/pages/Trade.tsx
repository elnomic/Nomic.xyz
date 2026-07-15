import { useState } from 'react'
import { ArrowUp, ArrowDown, TrendingUp, Clock, Settings } from 'lucide-react'

interface TradeProps {
  navigate?: (path: string) => void
}

export function Trade({ navigate }: TradeProps) {
  const [selectedPair, setSelectedPair] = useState('BTC')
  const [leverage, setLeverage] = useState(10)
  const [amount, setAmount] = useState('')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [limitPrice, setLimitPrice] = useState('')
  const [side, setSide] = useState<'long' | 'short' | null>(null)
  const [activeTab, setActiveTab] = useState<'trade' | 'positions' | 'orders'>('trade')

  const pairs = [
    { symbol: 'BTC', name: 'Bitcoin', price: '67,234.50', change: '+2.34%', color: '#F7931A' },
    { symbol: 'ETH', name: 'Ethereum', price: '3,456.78', change: '+1.87%', color: '#627EEA' },
  ]

  const selectedPairData = pairs.find(p => p.symbol === selectedPair)

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate?.('/')}
            className="p-2 rounded-lg bg-surface hover:bg-surface-elevated transition-all"
          >
            ←
          </button>
          <h1 className="text-xl sm:text-2xl font-bold">Trade</h1>
        </div>
        
        {/* Pair Selector */}
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

      {/* Price Bar */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-mono font-bold">${selectedPairData?.price}</p>
            <p className={`text-sm ${selectedPairData?.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
              {selectedPairData?.change} (24h)
            </p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div className="hidden sm:block">
            <p className="text-xs text-text-secondary">24h High</p>
            <p className="text-sm font-mono">$68,450.00</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-text-secondary">24h Low</p>
            <p className="text-sm font-mono">$66,100.00</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-text-secondary">24h Volume</p>
            <p className="text-sm font-mono">$2.4B</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-xs text-text-secondary hover:text-text-primary px-2 py-1 rounded bg-surface-elevated">
            <Clock className="w-4 h-4 inline" /> 1m
          </button>
          <button className="text-xs text-text-secondary hover:text-text-primary px-2 py-1 rounded bg-surface-elevated">
            5m
          </button>
          <button className="text-xs text-text-secondary hover:text-text-primary px-2 py-1 rounded bg-surface-elevated">
            15m
          </button>
          <button className="text-xs text-text-secondary hover:text-text-primary px-2 py-1 rounded bg-surface-elevated">
            1h
          </button>
          <button className="text-xs text-text-secondary hover:text-text-primary px-2 py-1 rounded bg-surface-elevated">
            4h
          </button>
          <button className="text-xs text-text-primary px-2 py-1 rounded bg-primary/20">
            1d
          </button>
        </div>
      </div>

      {/* Main Trading Area */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {/* Chart Area - 2/4 width */}
        <div className="xl:col-span-2 glass-panel p-4 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold">Price Chart</span>
            <button className="text-xs text-text-secondary hover:text-text-primary">
              <Settings className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center bg-surface-elevated/30 rounded-lg">
            <div className="text-center">
              <div className="text-5xl mb-3">📊</div>
              <p className="text-text-secondary">Chart Coming Soon</p>
              <p className="text-xs text-text-secondary mt-1">TradingView integration in progress</p>
            </div>
          </div>
        </div>

        {/* Order Form - 1/4 width */}
        <div className="xl:col-span-1 glass-panel p-4">
          <div className="space-y-4">
            {/* Leverage */}
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
                <span>10x</span>
                <span>25x</span>
                <span>50x</span>
              </div>
            </div>

            {/* Order Type */}
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

            {/* Limit Price */}
            {orderType === 'limit' && (
              <div>
                <label className="text-xs text-text-secondary">Limit Price</label>
                <input
                  type="number"
                  value={limitPrice}
                  onChange={(e) => setLimitPrice(e.target.value)}
                  placeholder="Enter price"
                  className="input-primary w-full mt-1 text-sm"
                />
              </div>
            )}

            {/* Amount */}
            <div>
              <label className="text-xs text-text-secondary">Amount (USDC)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="input-primary w-full mt-1 text-sm"
              />
              <div className="flex gap-1 mt-1">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setAmount((1000 * pct / 100).toString())}
                    className="flex-1 py-1 text-xs bg-surface-elevated hover:bg-surface-elevated/80 rounded transition-all"
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Value */}
            {amount && (
              <div className="bg-surface-elevated/50 rounded-lg p-2 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Position Size</span>
                  <span className="font-mono">${Number(amount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Margin Required</span>
                  <span className="font-mono">${(Number(amount) / leverage).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Liquidation Price</span>
                  <span className="font-mono text-danger">$61,234.50</span>
                </div>
              </div>
            )}

            {/* Long/Short Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSide('long')}
                className={`py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 ${
                  side === 'long'
                    ? 'bg-success text-white'
                    : 'bg-success/10 text-success hover:bg-success/20'
                }`}
              >
                <ArrowUp className="w-4 h-4" />
                Long
              </button>
              <button
                onClick={() => setSide('short')}
                className={`py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1 ${
                  side === 'short'
                    ? 'bg-danger text-white'
                    : 'bg-danger/10 text-danger hover:bg-danger/20'
                }`}
              >
                <ArrowDown className="w-4 h-4" />
                Short
              </button>
            </div>

            {/* Submit */}
            <button
              disabled={!side || !amount}
              className={`w-full py-2.5 rounded-lg font-semibold transition-all ${
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

        {/* Order Book - 1/4 width */}
        <div className="xl:col-span-1 glass-panel p-4 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Order Book</span>
            <span className="text-xs text-text-secondary">Depth</span>
          </div>
          
          {/* Header */}
          <div className="grid grid-cols-3 text-xs text-text-secondary border-b border-white/5 pb-2 mb-2">
            <span>Price (USDC)</span>
            <span className="text-center">Size</span>
            <span className="text-right">Total</span>
          </div>

          {/* Asks (Sell) - Red */}
          <div className="space-y-1 flex-1">
            {[
              { price: '67,250.00', size: '0.45', total: '0.45' },
              { price: '67,245.00', size: '1.20', total: '1.65' },
              { price: '67,240.00', size: '0.80', total: '2.45' },
              { price: '67,235.00', size: '2.10', total: '4.55' },
              { price: '67,230.00', size: '1.50', total: '6.05' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 text-xs text-danger/80 hover:bg-surface-elevated/50 rounded px-2 py-0.5">
                <span className="font-mono">{item.price}</span>
                <span className="text-center font-mono">{item.size}</span>
                <span className="text-right font-mono text-text-secondary">{item.total}</span>
              </div>
            ))}
          </div>

          {/* Current Price */}
          <div className="py-2 text-center border-y border-white/5 my-1">
            <span className="text-lg font-mono font-bold text-success">$67,234.50</span>
          </div>

          {/* Bids (Buy) - Green */}
          <div className="space-y-1 flex-1">
            {[
              { price: '67,230.00', size: '1.20', total: '1.20' },
              { price: '67,225.00', size: '0.80', total: '2.00' },
              { price: '67,220.00', size: '2.50', total: '4.50' },
              { price: '67,215.00', size: '1.00', total: '5.50' },
              { price: '67,210.00', size: '1.80', total: '7.30' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 text-xs text-success/80 hover:bg-surface-elevated/50 rounded px-2 py-0.5">
                <span className="font-mono">{item.price}</span>
                <span className="text-center font-mono">{item.size}</span>
                <span className="text-right font-mono text-text-secondary">{item.total}</span>
              </div>
            ))}
          </div>

          {/* Spread */}
          <div className="text-center text-xs text-text-secondary pt-2 border-t border-white/5 mt-2">
            Spread: 0.05% (4.50)
          </div>
        </div>
      </div>

      {/* Bottom: Positions & Orders */}
      <div className="glass-panel p-4">
        <div className="flex gap-4 border-b border-white/5 pb-3 mb-3">
          {['trade', 'positions', 'orders'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`text-sm capitalize transition-all ${
                activeTab === tab
                  ? 'text-text-primary border-b-2 border-primary pb-3 -mb-3'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab === 'trade' ? '📊 Open Positions' : 
               tab === 'positions' ? '📈 Position History' : 
               '📋 Open Orders'}
            </button>
          ))}
        </div>

        {activeTab === 'trade' && (
          <div className="text-center py-6 text-text-secondary">
            <p className="text-sm">No open positions</p>
            <p className="text-xs mt-1">Open a position using the form above</p>
          </div>
        )}
        {activeTab === 'positions' && (
          <div className="text-center py-6 text-text-secondary">
            <p className="text-sm">No position history</p>
          </div>
        )}
        {activeTab === 'orders' && (
          <div className="text-center py-6 text-text-secondary">
            <p className="text-sm">No open orders</p>
          </div>
        )}
      </div>
    </div>
  )
        }
