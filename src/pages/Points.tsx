interface PointsProps {
  navigate?: (page: string) => void
}

export function Points({ navigate }: PointsProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('home')}
        className="text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">⭐ Points</h1>
      <div className="glass-panel p-6 text-center py-12">
        <p className="text-4xl mb-3">🏆</p>
        <p className="text-text-secondary">Points & rewards coming soon</p>
      </div>
    </div>
  )
}
