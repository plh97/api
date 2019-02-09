
const router = require('koa-router')();
const koaBody = require('koa-body');

const Upload = require('./upload');
const Graphql = require('./graphql.js');
const pcss = require('./postcss.js');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .all('/graphql', Graphql)
  .all('/postcss', pcss)
  .all('/test', async ctx=>{
    ctx.body = "234"
  })


module.exports = router;

