// apk
const fs = require('fs-extra');
const path = require('path');

// local
const { getType } = require('./mimes.js');

const Upload = async (ctx, next) => {
  if (ctx.method !== 'POST') return await next();
  let { file } = ctx.request.body.files;
  console.log(ctx.request.body)
  if (!file.length) {
    file = [file];
  }
  const env = process.env.NODE_ENV;
  const url = name => {
    return `https://static.pipk.top/api/public/images/${name}`;
  } 
  ctx.body = await Promise.all(file.map(async (image) => {
    const ext = getType(image.type);
    const name = `${Math.random().toString().replace(/0./, '')}.${ext}`;
    const newpath = path.resolve(`./public/images/${name}`);
    const topath = fs.createWriteStream(newpath);
    const stream = await fs.createReadStream(image.path).pipe(topath);
    const result = await new Promise((resolve) => {
      stream.on('finish', async () => {
        resolve({
          name,
          url: url(name),
        });
      });
    });
    return result;
  }));
};

module.exports = Upload;
