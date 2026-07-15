import { Header } from './Header'
import { Navigation } from './Navigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  console.log('🏗️ Layout rendering...')
  
  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Header />
      <div className="flex flex-1">
        <Navigation />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
