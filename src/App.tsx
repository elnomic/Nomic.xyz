import { Toaster } from 'react-hot-toast'
import { Layout } from './components/Layout/Layout'
import { Dashboard } from './pages/Dashboard'

console.log('🔧 App component rendering...')

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Layout>
        <Dashboard />
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
