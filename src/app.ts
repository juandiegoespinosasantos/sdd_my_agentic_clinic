import express from 'express';
import db from './db';

const app = express();

app.use(express.json());

// Agents Routes
app.post('/agents', (req, res) => {
  const { name, type } = req.body;
  const stmt = db.prepare('INSERT INTO agents (name, type) VALUES (?, ?)');
  const info = stmt.run(name, type);
  res.status(201).json({ id: info.lastInsertRowid, name, type });
});

app.get('/agents', (req, res) => {
  const agents = db.prepare('SELECT * FROM agents').all();
  res.json(agents);
});

// Ailments Routes
app.post('/ailments', (req, res) => {
  const { name, description } = req.body;
  const stmt = db.prepare('INSERT INTO ailments (name, description) VALUES (?, ?)');
  const info = stmt.run(name, description);
  res.status(201).json({ id: info.lastInsertRowid, name, description });
});

app.get('/ailments', (req, res) => {
  const ailments = db.prepare('SELECT * FROM ailments').all();
  res.json(ailments);
});

// Therapies Routes
app.post('/therapies', (req, res) => {
  const { name, description } = req.body;
  const stmt = db.prepare('INSERT INTO therapies (name, description) VALUES (?, ?)');
  const info = stmt.run(name, description);
  res.status(201).json({ id: info.lastInsertRowid, name, description });
});

app.get('/therapies', (req, res) => {
  const therapies = db.prepare('SELECT * FROM therapies').all();
  res.json(therapies);
});

// Appointments Routes
app.post('/appointments', (req, res) => {
  const { agent_id, ailment_id, therapy_id, appointment_date } = req.body;
  const stmt = db.prepare(
    'INSERT INTO appointments (agent_id, ailment_id, therapy_id, appointment_date) VALUES (?, ?, ?, ?)'
  );
  const info = stmt.run(agent_id, ailment_id, therapy_id, appointment_date);
  res.status(201).json({ id: info.lastInsertRowid, agent_id, ailment_id, therapy_id, appointment_date });
});

app.get('/appointments', (req, res) => {
  const appointments = db.prepare('SELECT * FROM appointments').all();
  res.json(appointments);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;
