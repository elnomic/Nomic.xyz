interface DashboardProps {
  onNavigate?: (path: string) => void
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
        <button 
          onClick={() => onNavigate?.('/trade')}
          className="btn-primary text-sm py-1.5 px-4"
        >
          Trade Now →
        </button>
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="glass-panel p-4 sm:p-6">
          <p className="text-text-secondary text-xs sm:text-sm">Total Equity</p>
          <p className="text-lg sm:text-2xl font-bold">$100,000.00</p>
          <p className="text-xs text-success mt-1">+2.5% today</p>
        </div>
        <div className="glass-panel p-4 sm:p-6">
          <p className="text-text-secondary text-xs sm:text-sm">24h P&L</p>
          <p className="text-lg sm:text-2xl font-bold text-success">+$2,500.00</p>
          <p className="text-xs text-text-secondary mt-1">From 3 positions</p>
        </div>
        <div className="glass-panel p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-text-secondary text-xs sm:text-sm">Available Margin</p>
          <p className="text-lg sm:text-2xl font-bold">$80,000.00</p>
          <p className="text-xs text-text-secondary mt-1">Used: $20,000.00</p>
        </div>
      </div>

      {/* Market Overview */}
      <div className="glass-panel p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Market Overview</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2.5 sm:p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">₿</span>
              <div>
                <span className="font-semibold text-sm sm:text-base">BTC/USDC</span>
                <span className="hidden xs:inline-block text-xs text-text-secondary ml-2">Bitcoin</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold text-sm sm:text-base">$67,234.50</p>
              <p className="text-xs sm:text-sm text-success">+2.34%</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-2.5 sm:p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">⟠</span>
              <div>
                <span className="font-semibold text-sm sm:text-base">ETH/USDC</span>
                <span className="hidden xs:inline-block text-xs text-text-secondary ml-2">Ethereum</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold text-sm sm:text-base">$3,456.78</p>
              <p className="text-xs sm:text-sm text-success">+1.87%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
