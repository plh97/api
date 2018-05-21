
const router = require('koa-router')();
const koaBody = require('koa-body');

const Upload = require('./upload');
const Graphql = require('./graphql.js');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .post('/graphql', Graphql);


module.exports = router;

