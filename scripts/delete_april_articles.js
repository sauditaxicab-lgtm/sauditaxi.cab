const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function removeAprilArticles() {
    console.log("Removing articles published in April...");
    
    // April ke articles jin ki date 31 March ke baad ki hay unko delete kar dein gey
    const { data, error } = await supabase
        .from('posts')
        .delete()
        .gt('created_at', '2026-03-31T23:59:59Z');

    if (error) {
        console.error('Error removing posts:', error.message);
    } else {
        console.log('Successfully removed all April articles!');
    }
}

removeAprilArticles();
