# Deploy Workflow

Invoke with `/deploy`. Run these steps in order, stopping and reporting if any step fails:

1. Verify all applicable Mandatory Quality Gates in 03_STANDARDS.md pass (build, typecheck, lint, accessibility AA, no broken links).
2. Run `astro build`. Confirm `/dist` is produced with zero errors.
3. Read FTP credentials from `.env` at the project root (`FTP_HOST`, `FTP_USERNAME`, `FTP_PORT`, `FTP_PASSWORD`, `FTP_REMOTE_DIR`). Do not print the password value anywhere.
4. Upload the full contents of `/dist` to `FTP_REMOTE_DIR` on `FTP_HOST:FTP_PORT`, overwriting existing files.
5. Spot-check that `souliography.com` serves the new build (fetch the homepage and confirm it responds).
6. Report: files uploaded, any errors, and the live URL(s) to manually verify.
