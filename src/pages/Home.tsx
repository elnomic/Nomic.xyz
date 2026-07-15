export function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">🏠 Home Page</h1>
      <p className="text-text-secondary">This is a new page to test routing</p>
      <button 
        onClick={() => window.location.href = '/trade'}
        className="btn-primary"
      >
        Go to Trade
      </button>
    </div>
  )
}
