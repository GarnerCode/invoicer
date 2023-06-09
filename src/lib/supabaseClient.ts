import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wzhqdgnosewkgopgetzt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6aHFkZ25vc2V3a2dvcGdldHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMzA0NjQsImV4cCI6MjAwMTkwNjQ2NH0.06n3h8ziWGljBRh-swonZR7EhH3o0WcxA_Wovn5TIOQ';

export const supabase = createClient(supabaseUrl, supabaseKey);