JENS ELECTRONICS ADMIN DASHBOARD

1. In js/admin-config.js replace PASTE_YOUR_sb_publishable_KEY_HERE with the Supabase PUBLISHABLE key.
2. Upload admin.html, css/admin.css, js/admin.js and js/admin-config.js to the existing GitHub Pages repository. Preserve the folder structure.
3. Open https://www.jens.co.ke/admin.html and sign in using your confirmed Supabase Auth account.
4. Your account must be in public.admin_users. Existing products RLS must allow admin insert/update/delete.
5. The existing products public SELECT policy exposes quantity and all columns. Before going live with confidential inventory, redesign public access with a restricted public catalogue view and policies. Do not treat quantity as private yet.
6. Images: the form accepts an image URL. File uploads require Supabase Storage bucket and policies, not yet configured.
7. Do not commit database passwords, sb_secret keys or service_role keys. The publishable key is safe to use in client code only with correct RLS.
8. This dashboard uses the Supabase JavaScript SDK from a CDN, so it requires internet access.
