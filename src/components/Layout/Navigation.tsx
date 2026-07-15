import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  Star 
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: TrendingUp, label: 'Trade', path: '/trade' },
  { icon: Wallet, label: 'Portfolio', path: '/portfolio' },
  { icon: Star, label: 'Points', path: '/points' },
]

export function Navigation() {
  return (
    <nav className="w-20 bg-surface/95 backdrop-blur-sm border-r border-white/5 p-4 flex flex-col items-center gap-2">
      {navItems.map((item) => (
        <button
          key={item.path}
          className="w-full flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-all duration-200 group"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
