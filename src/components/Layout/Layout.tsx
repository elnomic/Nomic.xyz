import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
  onNavigate?: (path: string) => void
  activePath?: string
}

export function Layout({ children, onNavigate, activePath }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={onNavigate} activePath={activePath} />
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  )
}
