// src/components/Layout/Navigation.tsx
import { useState } from 'react'
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet as WalletIcon, 
  Star, 
  Menu,
  X 
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: TrendingUp, label: 'Trade', path: '/trade' },
  { icon: WalletIcon, label: 'Portfolio', path: '/portfolio' },
  { icon: Star, label: 'Points', path: '/points' },
]

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activePath, setActivePath] = useState('/')

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-primary p-3 rounded-full shadow-lg"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <nav className={`
        fixed lg:sticky top-0 lg:top-auto
        ${isMobileOpen ? 'left-0' : '-left-full'} 
        lg:left-0
        w-64 lg:w-20 xl:w-64
        h-full lg:h-auto
        bg-surface/95 backdrop-blur-sm
        border-r border-white/5
        transition-all duration-300
        z-40
        flex flex-col
        p-4
      `}>
        <div className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = activePath === item.path
            return (
              <button
                key={item.path}
                onClick={() => {
                  setActivePath(item.path)
                  setIsMobileOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-primary/10 text-primary border border-primary/20' 
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="lg:hidden xl:inline">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/5 pt-4 mt-4">
          <div className="px-4 py-2 text-xs text-text-secondary">
            <div>v0.1.0</div>
            <div className="mt-1 text-primary/60">⚡ Hyperliquid</div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
              }
