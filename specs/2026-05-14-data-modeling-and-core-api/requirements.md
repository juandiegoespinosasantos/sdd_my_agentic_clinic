# Requirements: Data Modeling & Core API

## Scope
- Define SQLite schema for:
  - Agents
  - Ailments
  - Therapies
  - Appointments
- Implement corresponding TypeScript types and database access layer.
- Expose basic RESTful API endpoints for CRUD operations.

## Context
- AgentClinic needs a persistent storage mechanism to manage the state of agents visiting the clinic and their associated treatments.
- SQLite is chosen as the database provider as per tech-stack.md.

## Decisions
- Use `better-sqlite3` for synchronous database interactions (suitable for CLI and small server tasks).
- Use `express` as the web framework.
