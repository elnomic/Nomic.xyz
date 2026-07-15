interface HomeProps {
  navigate?: (path: string) => void
}

export function Home({ navigate }: HomeProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🏠 Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

      <button 
        onClick={() => navigate?.('/trade')}
        className="btn-primary text-lg py-3 px-8"
      >
        🚀 Start Trading Now
      </button>
    </div>
  )
}
