const supertest = require('supertest');
const app = require('../app');

describe('Endpoints of cards', ()=>{
  it('should get list of cards', async ()=>{
    const res = await supertest(app)
    .get('/cards/')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.NWRjMmYwYWY0YTU0M2UyMDg1ZWU4N2Vh.eNZ49AdkJSE7WCkoqKNat_Y8dfYxTcSEPV0ta-Os-UQ')
    .send();

    expect(res.statusCode).toEqual(200);
  });
});
