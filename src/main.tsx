import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Error handling untuk debugging
console.log('🚀 Nomic DEX Starting...')

try {
  const root = document.getElementById('root')
  if (!root) {
    throw new Error('Root element not found!')
  }
  
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  console.log('✅ App rendered successfully')
} catch (error) {
  console.error('❌ Failed to render app:', error)
  document.body.innerHTML = `
    <div style="color: white; background: #000; padding: 20px; font-family: monospace;">
      <h1>Error Loading App</h1>
      <pre>${error}</pre>
    </div>
  `
}
