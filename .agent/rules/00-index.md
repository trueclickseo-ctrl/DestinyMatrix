# Project Index Rule

This project is governed by six markdown documents in the project root:

- **00_PROJECT_MANIFESTO.md** — vision, principles, operating rules, long-term goals
- **01_ARCHITECTURE.md** — engines, modules, design system, data flow, folder structure
- **02_ROADMAP.md** — phases, deliverables, definitions of done
- **03_STANDARDS.md** — engineering principles, coding standards, content governance, SEO, quality gates
- **04_DOMAIN_SPEC.md** — numerology, matrix, astrology, compatibility, and all other domain entities
- **05_DEPLOYMENT.md** — live FTP deployment process, run after every phase

Before starting any task on this project, read the relevant document(s) above — start with 00_PROJECT_MANIFESTO.md if this is a new session. Treat all six as binding project instructions, not a one-time prompt.

Never begin writing code for a new phase without first checking 02_ROADMAP.md for that phase's deliverables and Definition of Done, and 03_STANDARDS.md for the Mandatory Quality Gates that must pass before the phase can be reported complete.

Never report a phase complete without also running the deploy steps in 05_DEPLOYMENT.md so the site can be checked live. Never read, print, or write the FTP password anywhere outside `.env` — always read credentials from environment variables.
