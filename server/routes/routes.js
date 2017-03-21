import parse from 'co-body';
const router = require('koa-router')();
import job from '../controllers/jobController'

const routes = (app) => {
  app.use(router.routes());

  router.post('/api/postjobs',job);

}

export default routes;