const request = require('supertest');
const app = require('../server');

describe('Projects API', () => {
    it('GET /api/projects should return all projects', async () => {
        const res = await request(app).get('/api/projects');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
