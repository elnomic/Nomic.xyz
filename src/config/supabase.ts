// src/config/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          wallet_address: string | null
          created_at: string
          trading_volume: number
          points: number
        }
        Insert: {
          id?: string
          email: string
          wallet_address?: string | null
          created_at?: string
          trading_volume?: number
          points?: number
        }
      }
      trades: {
        Row: {
          id: string
          user_id: string
          asset: string
          side: 'long' | 'short'
          amount: number
          leverage: number
          price: number
          pnl: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          asset: string
          side: 'long' | 'short'
          amount: number
          leverage: number
          price: number
          pnl?: number | null
          created_at?: string
        }
      }
    }
  }
}
