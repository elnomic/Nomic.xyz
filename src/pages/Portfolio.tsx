interface PortfolioProps {
  navigate?: (page: string) => void
}

export function Portfolio({ navigate }: PortfolioProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('home')}
        className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">💼 Portfolio</h1>
      <div className="glass-panel p-6 text-center py-12">
        <p className="text-4xl mb-3">📊</p>
        <p className="text-text-secondary">Portfolio management coming soon</p>
      </div>
    </div>
  )
}
