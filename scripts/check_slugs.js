
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSlugs() {
    const { data, error } = await supabase
        .from('posts')
        .select('slug, title')
        .limit(5);

    if (error) {
        console.error('Error fetching slugs:', error.message);
    } else {
        console.log('Sample slugs in DB:', data);
    }
}

checkSlugs();
