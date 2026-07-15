interface TradeProps {
  navigate?: (path: string) => void
}

export function Trade({ navigate }: TradeProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('/')}
        className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2"
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-4">📈 Trade</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-panel p-6 min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-2">📊</p>
            <p className="text-text-secondary">Price Chart</p>
            <p className="text-sm text-text-secondary mt-1">Coming soon</p>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="text-center border-b border-white/5 pb-4 mb-4">
            <p className="text-2xl font-mono font-bold">$67,234.50</p>
            <p className="text-sm text-success">+2.34% (24h)</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-text-secondary">Leverage</label>
              <input type="range" min="1" max="50" value="10" className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-text-secondary">
                <span>1x</span>
                <span className="text-primary font-bold">10x</span>
                <span>50x</span>
              </div>
            </div>
            
            <div>
              <label className="text-sm text-text-secondary">Amount (USDC)</label>
              <input type="number" placeholder="0.00" className="input-primary w-full mt-1" />
              <div className="flex gap-1 mt-1">
                {[25, 50, 75, 100].map(p => (
                  <button key={p} className="flex-1 py-1 text-xs bg-surface-elevated hover:bg-surface-elevated/80 rounded">
                    {p}%
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button className="py-3 bg-success/20 text-success rounded-lg font-semibold hover:bg-success/30 transition">
                Long
              </button>
              <button className="py-3 bg-danger/20 text-danger rounded-lg font-semibold hover:bg-danger/30 transition">
                Short
              </button>
            </div>
            
            <button className="w-full py-3 bg-surface-elevated text-text-secondary rounded-lg font-semibold">
              Select Direction
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
