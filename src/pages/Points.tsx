interface PointsProps {
  navigate?: (path: string) => void
}

export function Points({ navigate }: PointsProps) {
  return (
    <div>
      <button 
        onClick={() => navigate?.('/')}
        className="mb-4 text-text-secondary hover:text-text-primary"
      >
        ← Back to Dashboard
      </button>
      <h1 className="text-2xl font-bold mb-4">⭐ Points</h1>
      <p className="text-text-secondary">Points & rewards coming soon...</p>
    </div>
  )
}
