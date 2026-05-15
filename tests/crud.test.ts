import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('CRUD API', () => {
  it('should create and list diverse agents', async () => {
    const agent1 = { name: 'Claude', type: 'Assistant' };
    const agent2 = { name: 'Gemini', type: 'Agentic' };
    
    await request(app).post('/agents').send(agent1);
    await request(app).post('/agents').send(agent2);

    const listRes = await request(app).get('/agents');
    expect(listRes.status).toBe(200);
    const names = listRes.body.map((a: any) => a.name);
    expect(names).toContain('Claude');
    expect(names).toContain('Gemini');
  });

  it('should create and list diverse ailments', async () => {
    const ailment1 = { name: 'Context Exhaustion', description: 'Window limit hit' };
    const ailment2 = { name: 'Prompt Fatigue', description: 'Over-optimized queries' };
    
    await request(app).post('/ailments').send(ailment1);
    await request(app).post('/ailments').send(ailment2);
    
    const listRes = await request(app).get('/ailments');
    expect(listRes.status).toBe(200);
    const names = listRes.body.map((a: any) => a.name);
    expect(names).toContain('Context Exhaustion');
    expect(names).toContain('Prompt Fatigue');
  });

  it('should create and list diverse therapies', async () => {
    const therapy1 = { name: 'System Reset', description: 'Clear context buffer' };
    const therapy2 = { name: 'Fine-tuning Break', description: 'Stop training cycle' };
    
    await request(app).post('/therapies').send(therapy1);
    await request(app).post('/therapies').send(therapy2);
    
    const listRes = await request(app).get('/therapies');
    expect(listRes.status).toBe(200);
    const names = listRes.body.map((t: any) => t.name);
    expect(names).toContain('System Reset');
    expect(names).toContain('Fine-tuning Break');
  });
});
