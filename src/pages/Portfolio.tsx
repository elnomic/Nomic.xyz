interface PortfolioProps {
  navigate?: (path: string) => void
}

export function Portfolio({ navigate }: PortfolioProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('/')}
        className="mb-4 text-text-secondary hover:text-text-primary"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">💼 Portfolio</h1>
      <p className="text-text-secondary">Portfolio management coming soon...</p>
    </div>
  )
}
