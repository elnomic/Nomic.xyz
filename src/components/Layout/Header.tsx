// src/components/Layout/Header.tsx
import { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Wallet } from 'lucide-react'
import toast from 'react-hot-toast'

export function Header() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleConnect = async () => {
    try {
      await connect({ connector: connectors[0] })
      toast.success('Wallet connected successfully!')
    } catch (error) {
      toast.error('Failed to connect wallet')
    }
  }

  const handleDisconnect = () => {
    disconnect()
    toast.success('Wallet disconnected')
  }

  return (
    <header className="bg-surface/80 backdrop-blur-sm border-b border-white/5 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Nomic</span>
            <span className="text-xs text-text-secondary bg-primary/10 px-2 py-0.5 rounded">Beta</span>
          </div>
          <div className="hidden md:flex gap-1 text-sm">
            <span className="text-success">●</span>
            <span className="text-text-secondary">Hyperliquid Mainnet</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isConnected ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-surface-elevated hover:bg-surface-elevated/80 px-4 py-2 rounded-lg transition-colors"
              >
                <Wallet className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface border border-surface-elevated rounded-lg shadow-xl overflow-hidden">
                  <button
                    onClick={handleDisconnect}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-surface-elevated transition-colors text-danger"
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleConnect}
              className="btn-primary flex items-center gap-2"
            >
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
