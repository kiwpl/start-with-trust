export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      blocked_vendors: {
        Row: {
          blocked_by: string | null
          category: string | null
          complaint_count: number
          contact_info: string | null
          contractor_id: string | null
          coop_id: string | null
          created_at: string | null
          id: string
          reason: string | null
          source: string
          updated_at: string | null
          vendor_name: string | null
          verification_status: string
        }
        Insert: {
          blocked_by?: string | null
          category?: string | null
          complaint_count?: number
          contact_info?: string | null
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          id?: string
          reason?: string | null
          source?: string
          updated_at?: string | null
          vendor_name?: string | null
          verification_status?: string
        }
        Update: {
          blocked_by?: string | null
          category?: string | null
          complaint_count?: number
          contact_info?: string | null
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          id?: string
          reason?: string | null
          source?: string
          updated_at?: string | null
          vendor_name?: string | null
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "blocked_vendors_blocked_by_fkey"
            columns: ["blocked_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_vendors_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_vendors_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      caller_records: {
        Row: {
          caller_name: string | null
          co_op_name: string | null
          created_at: string | null
          id: string
          last_called_at: string | null
          phone_number: string
          unit_number: string | null
        }
        Insert: {
          caller_name?: string | null
          co_op_name?: string | null
          created_at?: string | null
          id?: string
          last_called_at?: string | null
          phone_number: string
          unit_number?: string | null
        }
        Update: {
          caller_name?: string | null
          co_op_name?: string | null
          created_at?: string | null
          id?: string
          last_called_at?: string | null
          phone_number?: string
          unit_number?: string | null
        }
        Relationships: []
      }
      care_line_calls: {
        Row: {
          address: string | null
          agent_id: string | null
          call_status: string | null
          caller_name: string | null
          channel_type: string | null
          coop_id: string | null
          cost: number | null
          created_at: string
          duration_ms: number | null
          end_reason: string | null
          end_timestamp: string | null
          id: string
          issue_type: string | null
          needs_followup: boolean | null
          raw_data: Json | null
          recording_url: string | null
          retell_call_id: string | null
          session_status: string | null
          start_timestamp: string | null
          summary: string | null
          transcript: Json | null
          triage_data: Json | null
          updated_at: string
          urgency_level: string | null
          user_sentiment: string | null
        }
        Insert: {
          address?: string | null
          agent_id?: string | null
          call_status?: string | null
          caller_name?: string | null
          channel_type?: string | null
          coop_id?: string | null
          cost?: number | null
          created_at?: string
          duration_ms?: number | null
          end_reason?: string | null
          end_timestamp?: string | null
          id?: string
          issue_type?: string | null
          needs_followup?: boolean | null
          raw_data?: Json | null
          recording_url?: string | null
          retell_call_id?: string | null
          session_status?: string | null
          start_timestamp?: string | null
          summary?: string | null
          transcript?: Json | null
          triage_data?: Json | null
          updated_at?: string
          urgency_level?: string | null
          user_sentiment?: string | null
        }
        Update: {
          address?: string | null
          agent_id?: string | null
          call_status?: string | null
          caller_name?: string | null
          channel_type?: string | null
          coop_id?: string | null
          cost?: number | null
          created_at?: string
          duration_ms?: number | null
          end_reason?: string | null
          end_timestamp?: string | null
          id?: string
          issue_type?: string | null
          needs_followup?: boolean | null
          raw_data?: Json | null
          recording_url?: string | null
          retell_call_id?: string | null
          session_status?: string | null
          start_timestamp?: string | null
          summary?: string | null
          transcript?: Json | null
          triage_data?: Json | null
          updated_at?: string
          urgency_level?: string | null
          user_sentiment?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_line_calls_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      checklist_items: {
        Row: {
          completed_at: string | null
          completed_by: string | null
          contractor_id: string | null
          created_at: string | null
          id: string
          is_completed: boolean
          schedule_id: string | null
          status: string
          task_text: string
          unit_id: string | null
          updated_at: string | null
          work_order_id: string | null
        }
        Insert: {
          completed_at?: string | null
          completed_by?: string | null
          contractor_id?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean
          schedule_id?: string | null
          status?: string
          task_text: string
          unit_id?: string | null
          updated_at?: string | null
          work_order_id?: string | null
        }
        Update: {
          completed_at?: string | null
          completed_by?: string | null
          contractor_id?: string | null
          created_at?: string | null
          id?: string
          is_completed?: boolean
          schedule_id?: string | null
          status?: string
          task_text?: string
          unit_id?: string | null
          updated_at?: string | null
          work_order_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "checklist_items_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checklist_items_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checklist_items_schedule_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "recurring_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checklist_items_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "checklist_items_work_order_id_fkey"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      "Co-ops": {
        Row: {
          address: string | null
          careline_phone: string | null
          caroline_enabled: boolean
          city: string | null
          created_at: string | null
          email_address: string | null
          id: string
          name: string
          postal_code: string | null
          province: string | null
          retell_agent_id: string | null
          slug: string | null
          status: string | null
        }
        Insert: {
          address?: string | null
          careline_phone?: string | null
          caroline_enabled?: boolean
          city?: string | null
          created_at?: string | null
          email_address?: string | null
          id?: string
          name: string
          postal_code?: string | null
          province?: string | null
          retell_agent_id?: string | null
          slug?: string | null
          status?: string | null
        }
        Update: {
          address?: string | null
          careline_phone?: string | null
          caroline_enabled?: boolean
          city?: string | null
          created_at?: string | null
          email_address?: string | null
          id?: string
          name?: string
          postal_code?: string | null
          province?: string | null
          retell_agent_id?: string | null
          slug?: string | null
          status?: string | null
        }
        Relationships: []
      }
      common_areas: {
        Row: {
          area_type: string
          coop_id: string
          created_at: string | null
          description: string | null
          id: string
          name: string
          notes: string | null
          updated_at: string | null
        }
        Insert: {
          area_type?: string
          coop_id: string
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          notes?: string | null
          updated_at?: string | null
        }
        Update: {
          area_type?: string
          coop_id?: string
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          notes?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "common_areas_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      contractors: {
        Row: {
          address: string | null
          coop_id: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          status: string | null
          trade: string | null
        }
        Insert: {
          address?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          status?: string | null
          trade?: string | null
        }
        Update: {
          address?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          status?: string | null
          trade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contractors_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contractors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          created_at: string | null
          id: string
          user_id: string
          visible_from: string | null
        }
        Insert: {
          conversation_id: string
          created_at?: string | null
          id?: string
          user_id: string
          visible_from?: string | null
        }
        Update: {
          conversation_id?: string
          created_at?: string | null
          id?: string
          user_id?: string
          visible_from?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string | null
          created_by: string | null
          deleted_at: string | null
          deleted_by: string | null
          id: string
          is_deleted: boolean
          subject: string | null
          unit_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          id?: string
          is_deleted?: boolean
          subject?: string | null
          unit_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          deleted_by?: string | null
          id?: string
          is_deleted?: boolean
          subject?: string | null
          unit_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_deleted_by_fkey"
            columns: ["deleted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      coordinator_contacts: {
        Row: {
          co_op_name: string
          id: string
          is_available: boolean
          phone: string | null
          updated_at: string
        }
        Insert: {
          co_op_name: string
          id?: string
          is_available?: boolean
          phone?: string | null
          updated_at?: string
        }
        Update: {
          co_op_name?: string
          id?: string
          is_available?: boolean
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      demo_requests: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          property_name: string
          unit_count: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          property_name: string
          unit_count: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          property_name?: string
          unit_count?: string
        }
        Relationships: []
      }
      edit_logs: {
        Row: {
          coop_id: string | null
          created_at: string | null
          field_changed: string
          id: string
          new_value: string | null
          old_value: string | null
          table_name: string | null
          unit_id: string | null
          user_id: string | null
          user_name: string | null
          user_role: string | null
        }
        Insert: {
          coop_id?: string | null
          created_at?: string | null
          field_changed: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          table_name?: string | null
          unit_id?: string | null
          user_id?: string | null
          user_name?: string | null
          user_role?: string | null
        }
        Update: {
          coop_id?: string | null
          created_at?: string | null
          field_changed?: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          table_name?: string | null
          unit_id?: string | null
          user_id?: string | null
          user_name?: string | null
          user_role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "edit_logs_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      email_accounts: {
        Row: {
          access_token: string
          created_at: string
          email_address: string
          id: string
          last_synced_at: string | null
          refresh_token: string
          sync_status: string
          token_expiry: string
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          email_address: string
          id?: string
          last_synced_at?: string | null
          refresh_token: string
          sync_status?: string
          token_expiry: string
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          email_address?: string
          id?: string
          last_synced_at?: string | null
          refresh_token?: string
          sync_status?: string
          token_expiry?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      email_search_log: {
        Row: {
          ai_response: string | null
          created_at: string
          id: string
          paraphrased_suggestion: string | null
          query: string
          result_count: number | null
          user_id: string
        }
        Insert: {
          ai_response?: string | null
          created_at?: string
          id?: string
          paraphrased_suggestion?: string | null
          query: string
          result_count?: number | null
          user_id: string
        }
        Update: {
          ai_response?: string | null
          created_at?: string
          id?: string
          paraphrased_suggestion?: string | null
          query?: string
          result_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_search_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      email_verification_codes: {
        Row: {
          code: string
          created_at: string
          email: string
          expires_at: string
          id: string
          used: boolean
        }
        Insert: {
          code: string
          created_at?: string
          email: string
          expires_at: string
          id?: string
          used?: boolean
        }
        Update: {
          code?: string
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          used?: boolean
        }
        Relationships: []
      }
      feature_flags: {
        Row: {
          description: string | null
          enabled: boolean | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          enabled?: boolean | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          enabled?: boolean | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      history_log: {
        Row: {
          action_type: string
          created_at: string | null
          field_changed: string | null
          id: string
          new_value: string | null
          old_value: string | null
          performed_by: string | null
          performed_by_name: string | null
          schedule_id: string | null
          work_order_id: string | null
        }
        Insert: {
          action_type: string
          created_at?: string | null
          field_changed?: string | null
          id?: string
          new_value?: string | null
          old_value?: string | null
          performed_by?: string | null
          performed_by_name?: string | null
          schedule_id?: string | null
          work_order_id?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string | null
          field_changed?: string | null
          id?: string
          new_value?: string | null
          old_value?: string | null
          performed_by?: string | null
          performed_by_name?: string | null
          schedule_id?: string | null
          work_order_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "history_log_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "history_log_schedule_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "recurring_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "history_log_work_order_id_fkey"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_emails: {
        Row: {
          ai_category: string | null
          ai_priority: string | null
          ai_title: string | null
          ai_unit: string | null
          ai_vendor: string | null
          body: string | null
          coop_id: string
          created_at: string | null
          id: string
          received_at: string | null
          sender_email: string
          sender_name: string | null
          status: string
          subject: string | null
          updated_at: string | null
          work_order_id: string | null
        }
        Insert: {
          ai_category?: string | null
          ai_priority?: string | null
          ai_title?: string | null
          ai_unit?: string | null
          ai_vendor?: string | null
          body?: string | null
          coop_id: string
          created_at?: string | null
          id?: string
          received_at?: string | null
          sender_email: string
          sender_name?: string | null
          status?: string
          subject?: string | null
          updated_at?: string | null
          work_order_id?: string | null
        }
        Update: {
          ai_category?: string | null
          ai_priority?: string | null
          ai_title?: string | null
          ai_unit?: string | null
          ai_vendor?: string | null
          body?: string | null
          coop_id?: string
          created_at?: string | null
          id?: string
          received_at?: string | null
          sender_email?: string
          sender_name?: string | null
          status?: string
          subject?: string | null
          updated_at?: string | null
          work_order_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inbox_emails_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_emails_work_order_id_fkey"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          coop_id: string | null
          created_at: string | null
          email: string | null
          id: string
          move_in_date: string | null
          name: string | null
          phone: string | null
          role: string
          status: string | null
          unit_id: string | null
          user_id: string | null
        }
        Insert: {
          coop_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          move_in_date?: string | null
          name?: string | null
          phone?: string | null
          role?: string
          status?: string | null
          unit_id?: string | null
          user_id?: string | null
        }
        Update: {
          coop_id?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          move_in_date?: string | null
          name?: string | null
          phone?: string | null
          role?: string
          status?: string | null
          unit_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "members_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      message_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_size: number | null
          file_url: string
          id: string
          message_id: string
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_url: string
          id?: string
          message_id: string
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_url?: string
          id?: string
          message_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_attachments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          conversation_id: string
          created_at: string | null
          deleted_at: string | null
          edited_at: string | null
          id: string
          is_read: boolean
          message_text: string
          read_at: string | null
          receiver_id: string | null
          sender_id: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string | null
          deleted_at?: string | null
          edited_at?: string | null
          id?: string
          is_read?: boolean
          message_text: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string | null
          deleted_at?: string | null
          edited_at?: string | null
          id?: string
          is_read?: boolean
          message_text?: string
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          coop_id: string | null
          created_at: string
          id: string
          is_read: boolean
          related_wo_id: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          body?: string | null
          coop_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          related_wo_id?: string | null
          title: string
          type?: string
          user_id: string
        }
        Update: {
          body?: string | null
          coop_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean
          related_wo_id?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_related_wo_id_fkey"
            columns: ["related_wo_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      page_visibility: {
        Row: {
          created_at: string | null
          id: string
          is_enabled: boolean
          page_key: string
          page_name: string
          updated_at: string | null
          visible_to_roles: Json
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_enabled?: boolean
          page_key: string
          page_name: string
          updated_at?: string | null
          visible_to_roles?: Json
        }
        Update: {
          created_at?: string | null
          id?: string
          is_enabled?: boolean
          page_key?: string
          page_name?: string
          updated_at?: string | null
          visible_to_roles?: Json
        }
        Relationships: []
      }
      parsed_emails: {
        Row: {
          account_id: string
          body_text: string | null
          created_at: string
          from_email: string | null
          from_name: string | null
          gmail_message_id: string
          has_attachments: boolean | null
          id: string
          is_unread: boolean | null
          labels: Json | null
          received_at: string | null
          snippet: string | null
          subject: string | null
          thread_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_id: string
          body_text?: string | null
          created_at?: string
          from_email?: string | null
          from_name?: string | null
          gmail_message_id: string
          has_attachments?: boolean | null
          id?: string
          is_unread?: boolean | null
          labels?: Json | null
          received_at?: string | null
          snippet?: string | null
          subject?: string | null
          thread_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_id?: string
          body_text?: string | null
          created_at?: string
          from_email?: string | null
          from_name?: string | null
          gmail_message_id?: string
          has_attachments?: boolean | null
          id?: string
          is_unread?: boolean | null
          labels?: Json | null
          received_at?: string | null
          snippet?: string | null
          subject?: string | null
          thread_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parsed_emails_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parsed_emails_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_schedules: {
        Row: {
          auto_create_wo: boolean
          contractor_id: string | null
          coop_id: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          frequency: string
          id: string
          is_paused: boolean
          linked_wo_id: string | null
          next_due_date: string
          priority: string
          reminder_date: string | null
          start_date: string
          status: string
          task_name: string
          unit_id: string | null
          updated_at: string | null
        }
        Insert: {
          auto_create_wo?: boolean
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          frequency?: string
          id?: string
          is_paused?: boolean
          linked_wo_id?: string | null
          next_due_date?: string
          priority?: string
          reminder_date?: string | null
          start_date?: string
          status?: string
          task_name: string
          unit_id?: string | null
          updated_at?: string | null
        }
        Update: {
          auto_create_wo?: boolean
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          frequency?: string
          id?: string
          is_paused?: boolean
          linked_wo_id?: string | null
          next_due_date?: string
          priority?: string
          reminder_date?: string | null
          start_date?: string
          status?: string
          task_name?: string
          unit_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recurring_schedules_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_schedules_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_schedules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_schedules_linked_wo_id_fkey"
            columns: ["linked_wo_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recurring_schedules_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      service_photos: {
        Row: {
          created_at: string | null
          id: string
          image_url: string
          photo_type: string
          service_id: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url: string
          photo_type: string
          service_id: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string
          photo_type?: string
          service_id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_photos_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "standardized_pricing"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_photos_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      standardized_pricing: {
        Row: {
          base_price: number
          co_op_id: string
          created_at: string | null
          description: string | null
          has_photo_examples: boolean
          id: string
          price_unit: string
          service_category: string
          service_name: string
          updated_at: string | null
        }
        Insert: {
          base_price: number
          co_op_id: string
          created_at?: string | null
          description?: string | null
          has_photo_examples?: boolean
          id?: string
          price_unit: string
          service_category: string
          service_name: string
          updated_at?: string | null
        }
        Update: {
          base_price?: number
          co_op_id?: string
          created_at?: string | null
          description?: string | null
          has_photo_examples?: boolean
          id?: string
          price_unit?: string
          service_category?: string
          service_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "standardized_pricing_co_op_id_fkey"
            columns: ["co_op_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      system_activity: {
        Row: {
          action_type: string
          created_at: string | null
          description: string | null
          id: string
          performed_by: string | null
          performed_by_name: string | null
        }
        Insert: {
          action_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          performed_by?: string | null
          performed_by_name?: string | null
        }
        Update: {
          action_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          performed_by?: string | null
          performed_by_name?: string | null
        }
        Relationships: []
      }
      units: {
        Row: {
          baths: number | null
          beds: number | null
          building_type: string | null
          coop_id: string
          created_at: string | null
          floor: string | null
          id: string
          monthly_rent: number | null
          sq_ft: number | null
          status: string | null
          unit_number: string
        }
        Insert: {
          baths?: number | null
          beds?: number | null
          building_type?: string | null
          coop_id: string
          created_at?: string | null
          floor?: string | null
          id?: string
          monthly_rent?: number | null
          sq_ft?: number | null
          status?: string | null
          unit_number: string
        }
        Update: {
          baths?: number | null
          beds?: number | null
          building_type?: string | null
          coop_id?: string
          created_at?: string | null
          floor?: string | null
          id?: string
          monthly_rent?: number | null
          sq_ft?: number | null
          status?: string | null
          unit_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "units_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_user_id: string
          coop_id: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          gemini_api_key: string | null
          id: string
          role: string
          status: string | null
          terms_accepted_at: string | null
        }
        Insert: {
          auth_user_id: string
          coop_id?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          gemini_api_key?: string | null
          id?: string
          role?: string
          status?: string | null
          terms_accepted_at?: string | null
        }
        Update: {
          auth_user_id?: string
          coop_id?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          gemini_api_key?: string | null
          id?: string
          role?: string
          status?: string | null
          terms_accepted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      waitlist_signups: {
        Row: {
          coop_name: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string
          waitlist_number: string
        }
        Insert: {
          coop_name?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          phone: string
          waitlist_number: string
        }
        Update: {
          coop_name?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          waitlist_number?: string
        }
        Relationships: []
      }
      wo_chat_messages: {
        Row: {
          attachments: Json | null
          contractor_id: string | null
          created_at: string
          direction: string | null
          email_message_id: string | null
          id: string
          is_read_by_manager: boolean
          is_system: boolean
          message_text: string
          sender_id: string | null
          sender_name: string | null
          sender_type: string
          sent_at: string | null
          work_order_id: string | null
        }
        Insert: {
          attachments?: Json | null
          contractor_id?: string | null
          created_at?: string
          direction?: string | null
          email_message_id?: string | null
          id?: string
          is_read_by_manager?: boolean
          is_system?: boolean
          message_text: string
          sender_id?: string | null
          sender_name?: string | null
          sender_type?: string
          sent_at?: string | null
          work_order_id?: string | null
        }
        Update: {
          attachments?: Json | null
          contractor_id?: string | null
          created_at?: string
          direction?: string | null
          email_message_id?: string | null
          id?: string
          is_read_by_manager?: boolean
          is_system?: boolean
          message_text?: string
          sender_id?: string | null
          sender_name?: string | null
          sender_type?: string
          sent_at?: string | null
          work_order_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wo_chat_messages_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wo_chat_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wo_chat_messages_work_order_id_fkey"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      work_order_contractors: {
        Row: {
          contractor_id: string
          created_at: string
          id: string
          is_main: boolean
          work_order_id: string
        }
        Insert: {
          contractor_id: string
          created_at?: string
          id?: string
          is_main?: boolean
          work_order_id: string
        }
        Update: {
          contractor_id?: string
          created_at?: string
          id?: string
          is_main?: boolean
          work_order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "work_order_contractors_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_order_contractors_work_order_id_fkey"
            columns: ["work_order_id"]
            isOneToOne: false
            referencedRelation: "work_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      work_orders: {
        Row: {
          assigned_to: string | null
          category: string | null
          common_area_id: string | null
          contractor_email: string | null
          contractor_id: string | null
          coop_id: string | null
          created_at: string | null
          created_by: string | null
          current_thread_id: string | null
          deadline: string | null
          description: string | null
          email_subject: string | null
          email_thread_id: string | null
          frequency: string
          id: string
          last_message_id: string | null
          member_id: string | null
          original_thread_id: string | null
          previous_status: string | null
          priority: string | null
          reminder_date: string | null
          schedule_id: string | null
          short_id: string | null
          status: string | null
          thread_id: string | null
          title: string
          unit_id: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          category?: string | null
          common_area_id?: string | null
          contractor_email?: string | null
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          current_thread_id?: string | null
          deadline?: string | null
          description?: string | null
          email_subject?: string | null
          email_thread_id?: string | null
          frequency?: string
          id?: string
          last_message_id?: string | null
          member_id?: string | null
          original_thread_id?: string | null
          previous_status?: string | null
          priority?: string | null
          reminder_date?: string | null
          schedule_id?: string | null
          short_id?: string | null
          status?: string | null
          thread_id?: string | null
          title: string
          unit_id?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          category?: string | null
          common_area_id?: string | null
          contractor_email?: string | null
          contractor_id?: string | null
          coop_id?: string | null
          created_at?: string | null
          created_by?: string | null
          current_thread_id?: string | null
          deadline?: string | null
          description?: string | null
          email_subject?: string | null
          email_thread_id?: string | null
          frequency?: string
          id?: string
          last_message_id?: string | null
          member_id?: string | null
          original_thread_id?: string | null
          previous_status?: string | null
          priority?: string | null
          reminder_date?: string | null
          schedule_id?: string | null
          short_id?: string | null
          status?: string | null
          thread_id?: string | null
          title?: string
          unit_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_orders_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_common_area_id_fkey"
            columns: ["common_area_id"]
            isOneToOne: false
            referencedRelation: "common_areas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_coop_id_fkey"
            columns: ["coop_id"]
            isOneToOne: false
            referencedRelation: "Co-ops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_schedule_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "recurring_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_orders_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_work_order_short_id: {
        Args: { _created_at?: string }
        Returns: string
      }
      get_committed_role: { Args: { _user_id: string }; Returns: string }
      get_user_role: { Args: { _auth_user_id: string }; Returns: string }
      is_conversation_participant: {
        Args: { _auth_uid: string; _conversation_id: string }
        Returns: boolean
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
