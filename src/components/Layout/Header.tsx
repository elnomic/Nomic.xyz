import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-surface/80 backdrop-blur-sm border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-primary">Nomic</span>
          <span className="text-[10px] sm:text-xs text-text-secondary bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded">Beta</span>
        </div>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-text-primary p-2 touch-target"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        <button className="hidden sm:inline-flex btn-primary text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-6">
          Connect Wallet
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/5">
          <div className="grid grid-cols-4 gap-2">
            {['Dashboard', 'Trade', 'Portfolio', 'Points'].map((item) => (
              <button key={item} className="py-2.5 text-sm text-text-secondary hover:text-text-primary bg-surface-elevated/50 rounded-lg touch-target">
                {item}
              </button>
            ))}
          </div>
          <button className="w-full mt-3 btn-primary text-sm py-2.5 touch-target">
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  )
}
