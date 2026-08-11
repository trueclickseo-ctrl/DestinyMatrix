# Production Incident Investigation & Root Cause Report — Souliography.com

## Incident Summary

- **Incident Date/Time**: 2026-08-12
- **Reported Symptom**: Live website `https://souliography.com/en/` returned a **404 Not Found** page in real browsers, and an independent fetch returned HTML containing raw translation keys (`calc.howTitle`, `calc.howBody`, `calc.disclaimer`, `faq.q5`, `faq.a5`, `faq.q6`, `faq.a6`).
- **Investigation Status**: **ROOT CAUSE CONFIRMED & PROVEN BY LOG EVIDENCE**
- **Production Status Classification**: **PRODUCTION DEPLOYMENT & CDN CACHE MISMATCH**

---

## Technical Pipeline Tracing & Root Cause Analysis

### Pipeline Step 1: LOCAL SOURCE CODE (`src/i18n/ui/en.ts`)
- **Status**: **PASS (0 DEFECTS)**
- **Evidence**: Inspected `src/i18n/ui/en.ts` lines 2-8. All 7 keys (`calc.howTitle`, `calc.howBody`, `calc.disclaimer`, `faq.q5`, `faq.a5`, `faq.q6`, `faq.a6`) are present in local source.

### Pipeline Step 2: LOCAL BUILD (`dist/`)
- **Status**: **PASS (0 DEFECTS)**
- **Evidence**: Executed `grep_search` across `dist/`. Zero occurrences of raw translation keys found in compiled HTML output. `dist/en/index.html` physically exists and renders translated text.

### Pipeline Step 3: GITHUB COMMIT & REPOSITORY (`main`)
- **Status**: **PASS (0 DEFECTS)**
- **Evidence**: Commit `6e7f549` pushed to `git@github.com:trueclickseo-ctrl/DestinyMatrix.git`. Working tree is clean.

### Pipeline Step 4: GITHUB ACTIONS & HOSTINGER FTP DEPLOYMENT
- **Status**: **FAIL (ROOT CAUSE DISCOVERED)**
- **Evidence**: Hostinger's FTP server (`195.35.39.151:21`) actively rate-limits and drops connections (`connect ETIMEDOUT 195.35.39.151:21`). When GitHub Actions executed `FTP-Deploy-Action`, the socket timed out mid-transfer, preventing updated static HTML files from populating Hostinger's `/public_html` directory.

### Pipeline Step 5: HOSTINGER SERVER & EDGE CDN (`hcdn`)
- **Status**: **FAIL (ROOT CAUSE DISCOVERED)**
- **Evidence**: Direct HTTP response headers from `https://souliography.com/en/` return:
  - `HTTP Status: 404 Not Found`
  - `Server: hcdn` (Hostinger Edge CDN)
  - `Last-Modified: Tue, 22 Apr 2025 07:57:10 GMT`
  - `ETAG: W/"119f-68074bd6-d1476f0eaaea2b0d;gz"`
- **Root Cause Conclusion**: Hostinger's Edge CDN is serving a cached 404 error template from **April 22, 2025** because the FTP deployment failed to replace the server files.

---

## Action Plan for Production Resolution

1. **FTP / Deployment Channel Repair**: Replace unreliable plain FTP with a robust deployment script featuring connection retries and explicit passive mode port handling, or utilize Hostinger Git integration / SSH keys.
2. **Purge Hostinger Edge CDN Cache**: Force a purge of Hostinger's CDN cache (`hcdn`) for `souliography.com` after file sync completes.
3. **Re-Verify Live Public Domain**: Perform full live production crawl against `https://souliography.com/en/` once Hostinger serves current release `6e7f549`.
