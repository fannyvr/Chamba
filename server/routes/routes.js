import koaJwt from 'koa-jwt';
import dotenv from 'dotenv'; 
import koaRouter from 'koa-router';
import koaParse from 'koa-body';

dotenv.config();
const router = koaRouter();
const parse = koaParse();

import { job, getJobs } from '../controllers/jobController';
import { setUser } from '../controllers/userController';

const routes = app => {
  app.use( router.routes() );

  const authCheck = koaJwt({
  secret: new Buffer( process.env.AUTH0_SECRET, 'base64' ),
  audience:  process.env.AUTH0_CLIENT_ID
});

  router.post( '/api/postjobs', parse, job );
  router.get( '/api/searchjobs', getJobs );
  router.post( '/api/user', parse, setUser )

};

export default routes;