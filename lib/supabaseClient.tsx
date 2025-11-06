import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmgjznbzmtxjxefvtlor.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZ2p6bmJ6bXR4anhlZnZ0bG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNzg3MjYsImV4cCI6MjA3Nzk1NDcyNn0.WGhPPCPN3vwgjRjleHdLfRRL6BJ3Pi1QnjMEhW1WEGY';
export const supabase = createClient(supabaseUrl, supabaseKey);