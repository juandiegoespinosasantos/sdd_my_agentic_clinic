import { Database } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function openDb() {
  return await new Database({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });
}
