const supertest = require('supertest');
const app = require('../app');

describe('Endpoints of backlogs', ()=>{
  it('should get list of backlogs', async ()=>{
    const res = await supertest(app)
    .get('/backlogs/')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NWRkMWI0ZjZhNzkxMzMyNmE3ODg4OGE1.OMmX_jQXMKb-vGnajVYgmz5oHqHEdFiyAS89GObeXRQ')
    .send();

    expect(res.statusCode).toEqual(200);
  });
});
