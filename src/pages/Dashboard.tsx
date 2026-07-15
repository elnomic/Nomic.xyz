export function Dashboard() {
  console.log('📊 Dashboard rendering...')
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">Total Equity</p>
          <p className="text-2xl font-bold">$100,000.00</p>
          <p className="text-xs text-success mt-1">+2.5% today</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">24h P&L</p>
          <p className="text-2xl font-bold text-success">+$2,500.00</p>
          <p className="text-xs text-text-secondary mt-1">From 3 positions</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">Available Margin</p>
          <p className="text-2xl font-bold">$80,000.00</p>
          <p className="text-xs text-text-secondary mt-1">Used: $20,000.00</p>
        </div>
      </div>

      {/* Market Overview */}
      <div className="glass-panel p-6">
        <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-xl">₿</span>
              <span className="font-semibold">BTC/USDC</span>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold">$67,234.50</p>
              <p className="text-sm text-success">+2.34%</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-xl">⟠</span>
              <span className="font-semibold">ETH/USDC</span>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold">$3,456.78</p>
              <p className="text-sm text-success">+1.87%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
