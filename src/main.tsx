import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LayoutDashboard, TrendingUp, Wallet, Star, Menu, X } from 'lucide-react'
import { useState } from 'react'

// Header Component
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-surface/80 backdrop-blur-sm border-b border-white/5 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-primary">Nomic</span>
          <span className="text-[10px] sm:text-xs text-text-secondary bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded">Beta</span>
          <span className="hidden md:inline text-xs text-text-secondary ml-2">⚡ Hyperliquid</span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-text-primary p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        <button className="hidden sm:inline-flex btn-primary text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-6">
          Connect Wallet
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-white/5">
          <div className="grid grid-cols-4 gap-2">
            {['Dashboard', 'Trade', 'Portfolio', 'Points'].map((item) => (
              <button key={item} className="py-2 text-sm text-text-secondary hover:text-text-primary bg-surface-elevated/50 rounded-lg">
                {item}
              </button>
            ))}
          </div>
          <button className="w-full mt-3 btn-primary text-sm py-2">
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  )
}

// Navigation Component - Desktop
function Navigation() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: TrendingUp, label: 'Trade' },
    { icon: Wallet, label: 'Portfolio' },
    { icon: Star, label: 'Points' },
  ]
  
  return (
    <nav className="hidden lg:flex w-20 bg-surface/95 backdrop-blur-sm border-r border-white/5 p-4 flex-col items-center gap-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="w-full flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-all duration-200"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

// Dashboard Component - Mobile Responsive
function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
      
      {/* Cards - Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="glass-panel p-4 sm:p-6">
          <p className="text-text-secondary text-xs sm:text-sm">Total Equity</p>
          <p className="text-lg sm:text-2xl font-bold">$100,000.00</p>
          <p className="text-xs text-success mt-1">+2.5% today</p>
        </div>
        <div className="glass-panel p-4 sm:p-6">
          <p className="text-text-secondary text-xs sm:text-sm">24h P&L</p>
          <p className="text-lg sm:text-2xl font-bold text-success">+$2,500.00</p>
          <p className="text-xs text-text-secondary mt-1">From 3 positions</p>
        </div>
        <div className="glass-panel p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-text-secondary text-xs sm:text-sm">Available Margin</p>
          <p className="text-lg sm:text-2xl font-bold">$80,000.00</p>
          <p className="text-xs text-text-secondary mt-1">Used: $20,000.00</p>
        </div>
      </div>

      {/* Market Overview - Responsive */}
      <div className="glass-panel p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Market Overview</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2.5 sm:p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">₿</span>
              <div>
                <span className="font-semibold text-sm sm:text-base">BTC/USDC</span>
                <span className="hidden xs:inline-block text-xs text-text-secondary ml-2">Bitcoin</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold text-sm sm:text-base">$67,234.50</p>
              <p className="text-xs sm:text-sm text-success">+2.34%</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-2.5 sm:p-3 bg-surface-elevated/50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">⟠</span>
              <div>
                <span className="font-semibold text-sm sm:text-base">ETH/USDC</span>
                <span className="hidden xs:inline-block text-xs text-text-secondary ml-2">Ethereum</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-bold text-sm sm:text-base">$3,456.78</p>
              <p className="text-xs sm:text-sm text-success">+1.87%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Header />
      <div className="flex flex-1">
        <Navigation />
        <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
