import db from './src/db';

db.exec(`
  DELETE FROM agents;
  DELETE FROM ailments;
  DELETE FROM therapies;
  DELETE FROM appointments;
`);

const agents = [
  { name: 'Aurora-Nexus', type: 'Strategic-Analyst' },
  { name: 'Bolt-Quant', type: 'Numerical-Processor' },
  { name: 'Cipher-Mind', type: 'Security-Auditor' }
];

const ailments = [
  { name: 'Temporal-Lag', description: 'Delayed response processing' },
  { name: 'Semantic-Drift', description: 'Loss of original intent' }
];

const therapies = [
  { name: 'Deep-Memory-Flush', description: 'Wipe volatile cache' },
  { name: 'Logic-Circuit-Calibration', description: 'Re-sync inference path' }
];

agents.forEach(a => db.prepare('INSERT INTO agents (name, type) VALUES (?, ?)').run(a.name, a.type));
ailments.forEach(a => db.prepare('INSERT INTO ailments (name, description) VALUES (?, ?)').run(a.name, a.description));
therapies.forEach(t => db.prepare('INSERT INTO therapies (name, description) VALUES (?, ?)').run(t.name, t.description));

console.log('Database seeded with unique data successfully.');
