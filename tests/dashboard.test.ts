import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('Dashboard', () => {
  it('should render the dashboard with all sections', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('AgentClinic Dashboard');
    expect(response.text).toContain('Available Agents');
    expect(response.text).toContain('Ailments');
    expect(response.text).toContain('Therapies');
    expect(response.text).toContain('Upcoming Appointments');
  });
});
