// apk
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const preCSS = require('precss')
// local

module.exports = async (ctx) => {
  try {
    const {css} = ctx.request.body;
    const res = async data => new Promise((resolve, reject) => {
      postcss([preCSS, autoprefixer])
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
  } catch (error) {
    ctx.body = error
  }
};
