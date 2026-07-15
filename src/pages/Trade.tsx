interface TradeProps {
  navigate?: (path: string) => void
}

export function Trade({ navigate }: TradeProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('/')}
        className="mb-4 text-text-secondary hover:text-text-primary"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">📈 Trade</h1>
      <p className="text-text-secondary mb-4">Trading interface coming soon...</p>
      
      <div className="glass-panel p-6">
        <p className="text-lg font-semibold mb-2">BTC/USDC</p>
        <p className="text-3xl font-mono font-bold">$67,234.50</p>
        <p className="text-success">+2.34%</p>
      </div>
    </div>
  )
}
