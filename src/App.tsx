import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

// Import semua komponen
import { Home } from './pages/Home'
import { Trade } from './pages/Trade'
import { Portfolio } from './pages/Portfolio'
import { Points } from './pages/Points'

function App() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    // Log untuk debugging
    console.log('📍 App mounted, current path:', window.location.pathname)
    
    // Set path dari URL
    setCurrentPath(window.location.pathname)

    // Handle popstate (back/forward)
    const handlePopState = () => {
      console.log('🔄 Popstate triggered, new path:', window.location.pathname)
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Fungsi navigasi
  const navigate = (path: string) => {
    console.log('🔀 Navigating to:', path)
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  // Pilih komponen berdasarkan path
  let PageComponent
  switch (currentPath) {
    case '/':
      PageComponent = Home
      break
    case '/trade':
      PageComponent = Trade
      break
    case '/portfolio':
      PageComponent = Portfolio
      break
    case '/points':
      PageComponent = Points
      break
    default:
      PageComponent = Home
  }

  console.log('📄 Rendering page:', currentPath)

  return (
    <div className="min-h-screen bg-dark text-text-primary">
      {/* Navigation Bar Sederhana */}
      <nav className="bg-surface border-b border-white/5 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold text-primary">Nomic</span>
          <div className="flex gap-4">
            <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
            <button onClick={() => navigate('/trade')} className="hover:text-primary">Trade</button>
            <button onClick={() => navigate('/portfolio')} className="hover:text-primary">Portfolio</button>
            <button onClick={() => navigate('/points')} className="hover:text-primary">Points</button>
          </div>
          <button className="btn-primary text-sm py-1 px-4">Connect</button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto p-4">
        <PageComponent navigate={navigate} />
      </main>

      <Toaster position="top-right" />
    </div>
  )
}

export default App
