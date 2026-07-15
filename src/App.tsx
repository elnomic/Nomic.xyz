import { useState, useEffect } from 'react'
import { Home } from './pages/Home'
import { Trade } from './pages/Trade'
import { Portfolio } from './pages/Portfolio'
import { Points } from './pages/Points'

export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    // Cek URL saat pertama kali load
    const path = window.location.pathname
    if (path === '/trade') setPage('trade')
    else if (path === '/portfolio') setPage('portfolio')
    else if (path === '/points') setPage('points')
    else setPage('home')
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setPage(path === '/' ? 'home' : path.slice(1))
  }

  // Render page
  let Page
  switch (page) {
    case 'trade':
      Page = Trade
      break
    case 'portfolio':
      Page = Portfolio
      break
    case 'points':
      Page = Points
      break
    default:
      Page = Home
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Navbar */}
      <nav className="bg-surface border-b border-white/10 px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span 
            onClick={() => navigate('/')}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            Nomic
          </span>
          <div className="flex gap-2 sm:gap-4">
            <button 
              onClick={() => navigate('/')}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                page === 'home' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/trade')}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                page === 'trade' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-white'
              }`}
            >
              Trade
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                page === 'portfolio' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => navigate('/points')}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                page === 'points' ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:text-white'
              }`}
            >
              Points
            </button>
          </div>
          <button className="btn-primary text-sm py-1 px-3 sm:px-4">
            Connect
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-4">
        <Page navigate={navigate} />
      </main>
    </div>
  )
}
