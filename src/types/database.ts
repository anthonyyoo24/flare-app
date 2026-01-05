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
            pitches: {
                Row: {
                    id: string
                    user_id: string
                    company_name: string | null
                    user_name: string | null
                    video_url: string
                    resume_url: string | null
                    bio: string | null
                    email: string
                    calendly_link: string | null
                    social_links: Json | null
                    tech_stack: string[] | null
                    portfolio: Json | null
                    work_experience: Json | null
                    status: 'draft' | 'published' | null
                    published_at: string | null
                    created_at: string | null
                    updated_at: string | null
                }
                Insert: {
                    id?: string
                    user_id: string
                    company_name?: string | null
                    user_name?: string | null
                    video_url: string
                    resume_url?: string | null
                    bio?: string | null
                    email: string
                    calendly_link?: string | null
                    social_links?: Json | null
                    tech_stack?: string[] | null
                    portfolio?: Json | null
                    work_experience?: Json | null
                    status?: 'draft' | 'published' | null
                    published_at?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
                Update: {
                    id?: string
                    user_id?: string
                    company_name?: string | null
                    user_name?: string | null
                    video_url?: string
                    resume_url?: string | null
                    bio?: string | null
                    email?: string
                    calendly_link?: string | null
                    social_links?: Json | null
                    tech_stack?: string[] | null
                    portfolio?: Json | null
                    work_experience?: Json | null
                    status?: 'draft' | 'published' | null
                    published_at?: string | null
                    created_at?: string | null
                    updated_at?: string | null
                }
            }
        }
    }
}
