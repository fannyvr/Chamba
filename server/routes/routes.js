import parse from 'co-body';
import koaRouter from 'koa-router';
const router = koaRouter();

import {job, getJobs} from '../controllers/jobController'

const routes = (app) => {
  app.use(router.routes());

  router.post('/api/postjobs', job);
  router.get('/api/searchjobs', getJobs)

}

export default routes;