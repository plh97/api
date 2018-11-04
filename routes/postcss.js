// apk
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
// local

const PostCss = async (ctx, next) => {
  if (ctx.method !== 'POST') return await next();
  let { css } = ctx.request.body;
  console.log(ctx.request.body)


  const res = async () => new Promise(resolve=>{

    postcss([precss, autoprefixer])
      .process(postcss.parse(css))
      .then(res => {
        console.log(res.css);
        resolve(res.css)
      })
  })


  ctx.body = await res;
};

module.exports = PostCss;

