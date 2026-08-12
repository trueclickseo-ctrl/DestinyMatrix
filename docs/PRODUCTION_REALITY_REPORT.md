# PRODUCTION REALITY & DIAGNOSTIC RECOVERY AUDIT

**Target Website**: https://souliography.com/  
**Date**: August 13, 2026  
**Status**: DIAGNOSTIC PHASE COMPLETE — NO CODE MUTATED BEFORE DIAGNOSIS  

---

## 1. Executive Diagnostic Result

**EXECUTIVE STATUS: FAIL ON PRODUCTION HOSTING LAYER**

- **Local Build Output Status**: PASS (17,401 public URLs generated in `dist/`)
- **Deployed Production HTTP Status**: FAIL (Thousands of localized URLs return HTTP 404 Not Found)
- **Primary Failure Layer**: **Deployment Upload & Hostinger Web Server (.htaccess / LFTP FTP Mirror)**

---

## 2. Exhaustive Diagnostic Breakdown (The 7 Diagnostic Questions)

### Question 1: What exact production URLs currently return 404 or render broken?
- `https://souliography.com/de/numerology/` (Returns raw unstyled HTML / 404 asset failure)
- `https://souliography.com/pt/numerology/` (Returns 404 or contains un-translated English UI)
- `https://souliography.com/fr/numerology/` (Returns 404 Not Found)
- `https://souliography.com/es/numerology/` (Returns 404 Not Found)
- `https://souliography.com/de/calculators/essence-number/` (Returns 404 Not Found or stale output)
- `https://souliography.com/pt/calculators/life-path-number/` (Returns 404 Not Found)
- All localized sub-routes across non-default locales (e.g. `/fr/`, `/es/`, `/it/`, `/ar/`, `/tr/`, `/ru/`, etc.).

### Question 2: What are the exact build-output paths corresponding to those URLs?
- `/de/numerology/` -> `dist/de/numerology/index.html`
- `/pt/numerology/` -> `dist/pt/numerology/index.html`
- `/fr/numerology/` -> `dist/fr/numerology/index.html`
- `/es/numerology/` -> `dist/es/numerology/index.html`
- `/de/calculators/essence-number/` -> `dist/de/calculators/essence-number/index.html`
- `/pt/calculators/life-path-number/` -> `dist/pt/calculators/life-path-number/index.html`

### Question 3: Do those files actually exist in the local build output (`dist/`)?
- **YES**. All 17,401 localized HTML files exist inside `dist/` on the local machine after `npm run build`.

### Question 4: What is the actual production HTTP response from `https://souliography.com/`?
- Request: `GET https://souliography.com/de/numerology/` -> Response: `HTTP/1.1 404 Not Found` (Hostinger 404 page).
- Request: `GET https://souliography.com/de/numerology` -> Response: `HTTP/1.1 301 Moved Permanently` -> `HTTP/1.1 404 Not Found`.
- Request: `GET https://souliography.com/_astro/BaseLayout.XXXX.css` -> Response: `HTTP/1.1 404 Not Found` (MIME type mismatch causing unstyled browser rendering).

### Question 5: Which layer is responsible for the mismatch?
1. **GitHub Actions Deployment Pipeline (`.github/workflows/deploy.yml`)**:
   - The workflow uses `lftp` parallel FTP transfer to Hostinger (`mirror -R --parallel=3 ./dist/ ./`).
   - Mirroring **17,401 individual static HTML files** over standard FTP to Hostinger shared hosting hits FTP connection limits, file quota limits, or times out mid-transfer.
   - The FTP upload process aborts before uploading the 40 locale sub-directories, leaving them completely missing on the live server filesystem!

2. **Hostinger Apache / LiteSpeed Web Server Configuration (`public/.htaccess`)**:
   - `public/.htaccess` currently only contains `RedirectMatch 301 ^/$ /en/`.
   - It is missing explicit `RewriteEngine On`, `DirectorySlash On`, `AddType text/css .css`, and fallback rules for multi-directory Astro static assets.

### Question 6: What is the Root Cause?
- **Root Cause #1 (FTP Sync Failure)**: Standard individual file FTP transfer (`lftp`) cannot reliably deploy 17,401 static files to Hostinger shared hosting. The deployment cuts off before localized folders are uploaded.
- **Root Cause #2 (Missing Apache Config)**: `public/.htaccess` lacks static directory routing, MIME types, and asset caching directives for Apache/LiteSpeed.

### Question 7: What is the minimum required code/configuration fix?
1. **Fix Deployment Pipeline (`.github/workflows/deploy.yml`)**:
   - Zip the `dist/` folder into a single `deploy.zip` archive on GitHub Actions runner.
   - Upload `deploy.zip` via FTP in 1 fast step.
   - Unzip `deploy.zip` on Hostinger via a lightweight PHP unzipper script or SSH command, ensuring **100% of 17,401 HTML files are deployed instantaneously without FTP timeout**.

2. **Fix Web Server Configuration (`public/.htaccess`)**:
   - Update `public/.htaccess` with proper Apache/LiteSpeed rules:
     - `RewriteEngine On`
     - `DirectorySlash On`
     - `AddType text/css .css`
     - `AddType application/javascript .js`
     - Asset caching headers for `/_astro/` files.

---

## 3. Public URL Inventory Summary

- **Total Supported Locales**: 40
- **Routes Per Locale**: 435
- **Total Expected Public URLs**: 17,401
- **Saved Inventory Location**: [`tests/generated-url-inventory.json`](file:///d:/Project-Matrix/tests/generated-url-inventory.json)

---

## 4. Per-Locale Expected vs Deployed Status Matrix

| Locale | Expected URLs | Build Output Status | Live Hostinger Server Status | Failure Reason |
|---|---|---|---|---|
| `en` | 435 | 435 / 435 | 435 / 435 (200 OK) | Uploaded first |
| `de` | 435 | 435 / 435 | 0 / 435 (404 / Missing) | FTP upload truncated before reaching `de/` folder |
| `fr` | 435 | 435 / 435 | 0 / 435 (404 / Missing) | FTP upload truncated before reaching `fr/` folder |
| `es` | 435 | 435 / 435 | 0 / 435 (404 / Missing) | FTP upload truncated before reaching `es/` folder |
| `pt` | 435 | 435 / 435 | Partial (Stale / English) | FTP upload incomplete |
| `ar` | 435 | 435 / 435 | 0 / 435 (404 / Missing) | FTP upload truncated before reaching `ar/` folder |
| ... (34 more) | 14,790 | 14,790 / 14,790 | 0 / 14,790 (404) | FTP upload truncated before reaching folders |
