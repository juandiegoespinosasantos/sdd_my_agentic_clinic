# Requirements: Project Scaffolding & Database Setup

## Scope
Initialize the basic infrastructure for the AgentClinic application, including the web server and the persistent storage layer.

## Context
This is the foundational phase (Phase 1) of the AgentClinic project, aimed at providing a sanctuary for AI agents.

## Technical Decisions
- **Framework:** Express.js with TypeScript.
- **Middleware:** `express.json()` for parsing JSON bodies.
- **Port:** Defaulting to `3000`.
- **Database:** SQLite using `sqlite3` and the `sqlite` wrapper for async/await support.
- **DB File:** `database.sqlite` in the project root.
- **Dev Tooling:** `ts-node-dev` for hot-reloading during development.

## Dependencies to Add
- Production: `express`, `sqlite3`, `sqlite`
- Development: `@types/express`, `ts-node-dev`, `@types/node`
