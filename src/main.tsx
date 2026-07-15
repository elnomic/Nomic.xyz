import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Minimal test
function App() {
  return (
    <div style={{ color: 'white', padding: '20px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#0066FF' }}>🚀 Nomic DEX</h1>
      <p>If you see this, React is working!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
