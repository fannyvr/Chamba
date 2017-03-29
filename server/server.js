import koa from 'koa';
import spa from 'koa-spa';
import path from 'path';
import mongoose from 'mongoose';

import jobController from './controllers/jobController';
import routes from './routes/routes';

let app = new koa();

mongoose.connect('mongodb://localhost/chamba');

routes(app);

app.use(spa(path.join(__dirname, '../dist'),{
  index: 'index.html',
  404: '404.html',
  routeBase: '/'
}));

app.listen(3000);
console.log('server runing on port 3000');