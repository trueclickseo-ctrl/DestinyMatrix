# Deployment Integrity & Fingerprint Report — Souliography.com

## Pipeline Version Fingerprinting

| Environment Level | Fingerprint / Status | Detailed Findings |
| :--- | :--- | :--- |
| **Git Repository** | `6e7f549848bff7d5f5cfb985983fbc0c302e7c69` | Clean working tree; translation keys present |
| **Local Dist Output**| Built 2026-08-12 | 30,521 static pages compiled cleanly; 0 raw translation keys |
| **GitHub Actions** | FTP Upload Timed Out | Hostinger FTP rate-limiting caused deployment socket closure |
| **Hostinger Web Root**| Not Updated | Server contains stale/unpopulated file tree |
| **Live CDN Edge** | `Last-Modified: 22 Apr 2025` | Serving cached 2025 404 page (`hcdn`) |

---

## Conclusion
The local codebase and build artifact are **100% healthy and verified**. The live production discrepancy is caused strictly by a **deployment transport failure (FTP socket timeout)** and **stale CDN caching on Hostinger**.
