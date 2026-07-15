// src/pages/Dashboard.tsx
export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">Total Equity</p>
          <p className="text-2xl font-bold">$100,000.00</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">24h P&L</p>
          <p className="text-2xl font-bold text-success">+$2,500.00</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-text-secondary text-sm">Available Margin</p>
          <p className="text-2xl font-bold">$80,000.00</p>
        </div>
      </div>
    </div>
  )
}
