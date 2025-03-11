export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          role: 'patient' | 'doctor' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'patient' | 'doctor' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'patient' | 'doctor' | null
          created_at?: string
          updated_at?: string
        }
      }
      medical_records: {
        Row: {
          id: string
          patient_id: string
          title: string
          description: string | null
          record_date: string
          provider: string
          blockchain_hash: string | null
          verification_status: 'pending' | 'verified' | 'failed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          patient_id: string
          title: string
          description?: string | null
          record_date: string
          provider: string
          blockchain_hash?: string | null
          verification_status?: 'pending' | 'verified' | 'failed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          patient_id?: string
          title?: string
          description?: string | null
          record_date?: string
          provider?: string
          blockchain_hash?: string | null
          verification_status?: 'pending' | 'verified' | 'failed'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}