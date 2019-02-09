// package
const Koa = require('koa');
const http = require('http');
const bodyParser = require('koa-body-parser');
// local
const allRouter = require('./routes/index.js');
// application
const app = new Koa();
const port = 3001;
// const port = process.env.PORT;
const server = http.createServer(app.callback());

// core config
app
  .use(bodyParser())
  // 跨域中间件
  .use(async (ctx,next) =>{
    ctx.set('Access-Control-Allow-Origin', '*');

    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');
    await next()
  })
  // 响应时间中间件
  .use(async (ctx,next)=>{
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  })
  .use(allRouter.routes())
  .use(allRouter.allowedMethods())

server.listen(port, () => {
  console.log(` >>> port: ${port}`);
  // console.log(` >>> ENV: ${JSON.stringify(process.env)}`);
});
