import { useState, useEffect } from 'react'
import { Home } from './pages/Home'
import { Trade } from './pages/Trade'
import { Portfolio } from './pages/Portfolio'
import { Points } from './pages/Points'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/trade') setCurrentPage('trade')
    else if (path === '/portfolio') setCurrentPage('portfolio')
    else if (path === '/points') setCurrentPage('points')
    else setCurrentPage('home')
  }, [])

  const navigate = (page: string) => {
    setCurrentPage(page)
    let path = '/'
    if (page === 'trade') path = '/trade'
    else if (page === 'portfolio') path = '/portfolio'
    else if (page === 'points') path = '/points'
    window.history.pushState({}, '', path)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'trade': return <Trade navigate={navigate} />
      case 'portfolio': return <Portfolio navigate={navigate} />
      case 'points': return <Points navigate={navigate} />
      default: return <Home navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* NAVBAR */}
      <nav className="bg-surface border-b border-white/10 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div onClick={() => navigate('home')} className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold text-primary">Nomic</span>
            <span className="text-[10px] text-text-secondary bg-primary/10 px-2 py-0.5 rounded">Beta</span>
          </div>

          <div className="flex gap-1 sm:gap-2">
            {[
              { id: 'home', label: 'Dashboard' },
              { id: 'trade', label: 'Trade' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'points', label: 'Points' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  currentPage === item.id
                    ? 'bg-primary/20 text-primary border border-primary/20'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="btn-primary text-sm py-1.5 px-4">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto p-4">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
