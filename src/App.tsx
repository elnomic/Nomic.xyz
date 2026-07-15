import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Layout } from './components/Layout/Layout'
import { Navigation } from './components/Layout/Navigation'
import { Dashboard } from './pages/Dashboard'
import { Trade } from './pages/Trade'
import { Portfolio } from './pages/Portfolio'
import { Points } from './pages/Points'

// Map routes ke komponen
const routes: Record<string, React.ComponentType<any>> = {
  '/': Dashboard,
  '/trade': Trade,
  '/portfolio': Portfolio,
  '/points': Points,
}

function App() {
  // Ambil path dari URL
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/'
  })

  // Listen untuk perubahan URL (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Fungsi navigasi
  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  // Cari komponen berdasarkan path, fallback ke Dashboard
  const PageComponent = routes[currentPath] || Dashboard

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Layout onNavigate={navigate} activePath={currentPath}>
        <div className="flex flex-1">
          <Navigation activePath={currentPath} onNavigate={navigate} />
          <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <PageComponent onNavigate={navigate} />
            </div>
          </main>
        </div>
      </Layout>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#FFFFFF',
            border: '1px solid #2A2A2A',
            borderRadius: '12px',
          },
        }}
      />
    </div>
  )
}

export default App
