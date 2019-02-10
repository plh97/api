// apk
const fs = require('fs-extra');
const path = require('path');
const tiny = require("tinify");
// local
const { getType } = require('./mimes.js');

const Upload = async (ctx, next) => {
  try {
    if (ctx.method !== 'POST') return await next();
    let { file } = ctx.request.body.files;
    if (!file.length) {
      file = [file];
    }
    const url = n => `https://static.pipk.top/api/public/images/${n}`;
    ctx.body = await Promise.all(file.map(async (image) => {
      const ext = getType(image.type);
      const name = `${Math.random().toString().replace(/0./, '')}.${ext}`;
      const newPath = path.resolve(`./public/images/${name}`);
      const toPath = fs.createWriteStream(newPath);
      const stream = await fs.createReadStream(image.path).pipe(toPath);
      const result = await new Promise((resolve) => {
        stream.on('finish', async () => {
          resolve({
            name,
            url: url(name),
          });
          tiny.key = "ZrWdVHSSaLkfP6OdxM1RzZxPDE5gcnsf";
          const source = tiny.fromFile(`./public/images/${name}`);
          source.toFile(`./public/images/${name}`);
        });
      });
      return result;


    }));
  } catch (error) {
    ctx.body = {
      code: 0,
      msg: JSON.stringify(error),
    };
  }
};

module.exports = Upload;
