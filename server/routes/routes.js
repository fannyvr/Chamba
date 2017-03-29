import koaJwt from 'koa-jwt';
import dotenv from 'dotenv'; 
dotenv.config();
import parse from 'co-body';
import koaRouter from 'koa-router';
const router = koaRouter();

import {job, getJobs} from '../controllers/jobController'

const routes = (app) => {
  app.use(router.routes());

  const authCheck = koaJwt({
  secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
  audience:  process.env.AUTH0_CLIENT_ID
});

  router.post('/api/postjobs', job);
  router.get('/api/searchjobs', getJobs)

}

export default routes;