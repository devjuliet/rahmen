const supertest = require('supertest');
const app = require('../app');

describe('Endpoints of teams', ()=>{
  it('should get list of teams', async ()=>{
    const res = await supertest(app)
    .get('/teams/')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NWRjMmYwYWY0YTU0M2UyMDg1ZWU4N2Vh.eNZ49AdkJSE7WCkoqKNat_Y8dfYxTcSEPV0ta-Os-UQ')
    .send();

    expect(res.statusCode).toEqual(200);
  });
});
