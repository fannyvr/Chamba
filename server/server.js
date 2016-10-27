const koa = require('koa');
const spa = require('koa-spa');
const path = require('path');
const app = koa();

app.use(spa(path.join(__dirname, '../dist'),{
  index: 'index.html',
  404: '404.html',
  routeBase: '/'
}));

app.listen(3000);
console.log('server runing on port 3000');