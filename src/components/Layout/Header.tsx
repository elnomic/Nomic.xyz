import { Wallet } from 'lucide-react'

export function Header() {
  console.log('📌 Header rendering...')
  
  return (
    <header className="bg-surface/80 backdrop-blur-sm border-b border-white/5 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Nomic</span>
          <span className="text-xs text-text-secondary bg-primary/10 px-2 py-0.5 rounded">Beta</span>
          <span className="text-xs text-text-secondary ml-2 hidden md:inline">⚡ Hyperliquid</span>
        </div>

        <button className="btn-primary flex items-center gap-2">
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </button>
      </div>
    </header>
  )
}
