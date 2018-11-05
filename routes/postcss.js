// apk
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
// local

const pcss = async (ctx) => {
  const css = ctx.request.body;
  const res = async data => new Promise((resolve, reject) => {
    postcss([precss, autoprefixer])
      .process(postcss.parse(data))
      .then(res => {
        resolve(res.css)
      })
  })

  ctx.body = css
  // ctx.body ={
  //   res: await res(css)
  // } 
};

module.exports = pcss;

