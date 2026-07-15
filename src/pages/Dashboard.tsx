interface DashboardProps {
  onNavigate?: (path: string) => void
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header dengan tombol navigasi */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
        <button 
          onClick={() => onNavigate?.('/trade')}
          className="btn-primary text-sm py-1.5 px-4"
        >
          Go to Trade →
        </button>
      </div>
      
      {/* Cards - Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* ... cards sama seperti sebelumnya ... */}
      </div>

      {/* Market Overview */}
      <div className="glass-panel p-4 sm:p-6">
        {/* ... market overview sama ... */}
      </div>
    </div>
  )
}
