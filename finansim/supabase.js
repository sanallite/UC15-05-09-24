/* Implemente depois */

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mxddeazpzekoxrxceoiy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)