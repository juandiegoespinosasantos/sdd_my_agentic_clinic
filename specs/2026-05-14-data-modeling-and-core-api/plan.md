# Plan: Data Modeling & Core API

### Task Group 1: Database Schema Definition
1. Define table structures for Agents, Ailments, Therapies, and Appointments in `src/db.ts` or a new migration file.
2. Initialize the SQLite database instance.

### Task Group 2: TypeScript Models and Data Access
1. Define TypeScript interfaces for models.
2. Implement repository/helper functions to interact with the database.

### Task Group 3: Core API Implementation
1. Create Express routes for CRUD operations.
2. Integrate database calls with the API routes.

### Task Group 4: Verification
1. Implement unit and integration tests.
2. Run tests to ensure data integrity and API functionality.
