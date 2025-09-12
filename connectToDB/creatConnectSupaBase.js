import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = 'https://ljbzwsillvfllahzgvnt.supabase.co'
const supabaseKey = process.env.SECRET_SUPA_BASE

export  const supabase = createClient(supabaseUrl, supabaseKey)
