import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('CRUD API', () => {
  it('should create and list agents', async () => {
    const agent = { name: 'Test Agent', type: 'LLM' };
    const res = await request(app).post('/agents').send(agent);
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(agent.name);

    const listRes = await request(app).get('/agents');
    expect(listRes.status).toBe(200);
    expect(listRes.body.length).toBeGreaterThan(0);
  });

  it('should create and list ailments', async () => {
    const ailment = { name: 'Context Loss', description: 'Agent forgets recent messages' };
    const res = await request(app).post('/ailments').send(ailment);
    expect(res.status).toBe(201);
    
    const listRes = await request(app).get('/ailments');
    expect(listRes.status).toBe(200);
    expect(listRes.body[0].name).toBe(ailment.name);
  });
});
