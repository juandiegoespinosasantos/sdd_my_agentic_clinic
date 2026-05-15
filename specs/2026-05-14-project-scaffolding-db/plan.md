# Implementation Plan: Project Scaffolding & Database Setup

## Task Group 1: Environment & Dependencies
1. Initialize `npm` if not already fully configured (already has basic `package.json`).
2. Install production dependencies: `npm install express sqlite3 sqlite`.
3. Install development dependencies: `npm install -D @types/express ts-node-dev @types/node`.
4. Update `tsconfig.json` if necessary to ensure `esModuleInterop` and `resolveJsonModule` are enabled.

## Task Group 2: Project Structure & Basic Server
1. Create a `src/app.ts` to contain the Express application setup.
2. Update `src/index.ts` to start the server.
3. Implement a `/health` GET endpoint that returns a simple JSON status.

## Task Group 3: Database Initialization
1. Create a `src/db.ts` to handle the SQLite connection.
2. Ensure the database file is initialized when the application starts.
3. Log a success message when the database is ready.

## Task Group 4: Scripts & Finalization
1. Add a `"dev": "ts-node-dev --respawn src/index.ts"` script to `package.json`.
2. Add a `"start": "node dist/index.js"` script to `package.json`.
3. Verify the project builds with `npm run build`.
