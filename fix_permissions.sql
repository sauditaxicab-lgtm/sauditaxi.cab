-- Enable RLS on tables if not already enabled
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON bookings;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON posts;

-- Create full access policies for authenticated users (Admin)
CREATE POLICY "Enable all access for authenticated users" ON bookings
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable all access for authenticated users" ON contact_submissions
    FOR ALL USING (auth.role() = 'authenticated');
    
CREATE POLICY "Enable all access for authenticated users" ON posts
    FOR ALL USING (auth.role() = 'authenticated');
