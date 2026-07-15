import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Layout } from './components/Layout/Layout'
import { Navigation } from './components/Layout/Navigation'
import { routes, RoutePath } from './router'

function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/')
  
  const PageComponent = routes[currentPath] || routes['/']

  return (
    <div className="flex flex-col min-h-screen bg-dark">
      <Layout>
        <div className="flex flex-1">
          <Navigation activePath={currentPath} onNavigate={(path) => setCurrentPath(path as RoutePath)} />
          <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              <PageComponent />
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
