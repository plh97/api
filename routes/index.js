
const router = require('koa-router')();
const koaBody = require('koa-body');

const Upload = require('./upload');
const Graphql = require('./graphql.js');
const PostCss = require('./postcss.js');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .all('/postcss', PostCss)
  .post('/graphql', Graphql);


module.exports = router;

