const supertest = require('supertest');
const app = require('../app');

describe('Endpoints of teams', ()=>{
  it('should get list of teams', async ()=>{
    const res = await supertest(app)
    .get('/teams/')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NWRkMWI0ZjZhNzkxMzMyNmE3ODg4OGE1.OMmX_jQXMKb-vGnajVYgmz5oHqHEdFiyAS89GObeXRQ')
    .expect(200);

  });
});