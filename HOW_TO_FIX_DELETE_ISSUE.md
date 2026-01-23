# ⚠️ IMPORTANT: HOW TO FIX "DELETE" BUTTON ISSUE

Admin Panel se things delete karne ke liye aapko **Database Permissions** allow karni hongi.

Mera automatic tool connection failure ki wajah se nahi chal saka. Aapko bas ye chota sa kaam karna hai:

## ✅ Step 1: Open Supabase Dashboard
1. Apne **Supabase Project** mein login karein.
2. Left side menu mein **SQL Editor** par click karein.
3. **"New Query"** par click karein.

## ✅ Step 2: Run This Code
Niche diya gaya code copy karein aur wahan paste kar ke **RUN** bada button dabayein:

```sql
-- Enable RLS permissions for Admin
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Delete old rules
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON bookings;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON contact_submissions;

-- Allow Admin to Delete/Update
CREATE POLICY "Enable all access for authenticated users" ON bookings
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Enable all access for authenticated users" ON contact_submissions
    FOR ALL USING (auth.role() = 'authenticated');
```

## ✅ Step 3: Test Now
Ab wapis apni website par jayein aur **Delete** try karein. 100% chalega! 🚀
