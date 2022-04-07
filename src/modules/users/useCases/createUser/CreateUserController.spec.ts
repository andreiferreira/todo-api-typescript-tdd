/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

/* import { app } from '../../../../app';
import request from 'supertest';
describe('Create User Controller', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'test-integration',
      email: 'test@email.com',
    });

    expect(response.status).toBe(200);
  });

  it('should not be able to creat an existing user', async () => {
    await request(app).post('/users').send({
      name: 'test-integration-exist',
      email: 'test-exits@email.com',
    });

    const response = await request(app).post('/users').send({
      name: 'test-integration-exist',
      email: 'test-exits@email.com',
    });

    expect(response.status).toBe(400);
  });
});
 */
