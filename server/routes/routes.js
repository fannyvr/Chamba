import parse from 'co-body';
import koaRouter from 'koa-router';
const router = koaRouter();

import job from '../controllers/jobController'

const routes = (app) => {
  app.use(router.routes());

  router.post('/api/postjobs',job);

}

export default routes;