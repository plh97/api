// package
const Koa = require('koa');
const http = require('http');
const fs = require ('fs');
const url = require ('url');
const path = require ('path');
const mime = require ('./mime');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

// local
const allRouter = require('./routes/index.js');

// application
const app = new Koa();
const port = 8888;
// const port = process.env.PORT;
const server = http.createServer(app.callback());

// core config
app
  .use(bodyParser())
  .use(cors())
  .use( async ctx => {
    let filePath = `.${ctx.request.url}`;
    const resData = () => new Promise(res=>{
      fs.stat(filePath,(err,stat)=>{
        console.log(err,stat);
        

        fs.readdir(filePath,(err,files)=>{
          let html = '';
          console.log('222222222222',files);
          files.forEach( function (file){
            html += `
            <h3>
              <a href="${ctx.request.url}${file}">${file}</a>
            </h3>
            `;
          });
          res(html);
        })
      })
    });
    ctx.body = await resData()
  })
  .use(allRouter.routes())
  .use(allRouter.allowedMethods())

server.listen(port, () => {
  console.log(` >>> port: ${port}`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});
