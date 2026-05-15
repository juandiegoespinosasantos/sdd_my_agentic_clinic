import app from './app';
import { openDb } from './db';

const PORT = process.env.PORT || 3000;

async function startServer() {
  const db = await openDb();
  console.log('Database initialized successfully.');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
