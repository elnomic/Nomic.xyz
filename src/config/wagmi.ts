// src/config/wagmi.ts
import { createConfig, http } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || ''

export const config = createConfig({
  chains: [mainnet, arbitrum],
  connectors: [
    metaMask(),
    walletConnect({ projectId }),
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
})
