import { LayoutDashboard, TrendingUp, Wallet, Star } from 'lucide-react'

interface NavItem {
  icon: any
  label: string
  path: string
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: TrendingUp, label: 'Trade', path: '/trade' },
  { icon: Wallet, label: 'Portfolio', path: '/portfolio' },
  { icon: Star, label: 'Points', path: '/points' },
]

interface NavigationProps {
  activePath?: string
  onNavigate?: (path: string) => void
}

export function Navigation({ activePath = '/', onNavigate }: NavigationProps) {
  return (
    <nav className="hidden lg:flex w-20 bg-surface/95 backdrop-blur-sm border-r border-white/5 p-4 flex-col items-center gap-2">
      {navItems.map((item) => {
        const isActive = activePath === item.path
        return (
          <button
            key={item.label}
            onClick={() => onNavigate?.(item.path)}
            className={`w-full flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-primary/20 text-primary border border-primary/20'
                : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px]">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
