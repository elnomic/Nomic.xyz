import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// TEST: Render sederhana dulu
function App() {
  return (
    <div style={{ 
      color: 'white', 
      padding: '40px', 
      background: '#000000', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ color: '#0066FF', fontSize: '48px' }}>🚀 Nomic DEX</h1>
      <p style={{ fontSize: '20px', color: '#8A8A8A' }}>If you see this, React is working!</p>
      <div style={{ marginTop: '20px', padding: '20px', background: '#1A1A1A', borderRadius: '12px' }}>
        <p>✅ Build successful</p>
        <p>✅ Deployment successful</p>
        <p>✅ React rendering</p>
      </div>
    </div>
  )
}

console.log('🔥 App rendering...')

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error('Root element not found!')
  document.body.innerHTML = '<h1 style="color:white;">Error: Root not found</h1>'
}
