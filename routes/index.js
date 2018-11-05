
const router = require('koa-router')();
const koaBody = require('koa-body');

const Upload = require('./upload');
const Graphql = require('./graphql.js');
const pcss = require('./postcss.js');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .post('/graphql', Graphql)
  .all('/postcss', pcss)


module.exports = router;

