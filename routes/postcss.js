// apk
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
// local

const pcss = async (ctx) => {
  const {css} = ctx.request.body;
  const res = async data => new Promise((resolve, reject) => {
    postcss([precss, autoprefixer])
      .process(postcss.parse(data))
      .then(res => {
        resolve(res.css)
      })
  })
  console.log(
    await res(css)
  );
  

  // ctx.body = css
  ctx.body = {
    apiCode: 0,
    msg: "操作成功",
    success: true,
    data: {
      css: await res(css),
    }
  } 
};

module.exports = pcss;

