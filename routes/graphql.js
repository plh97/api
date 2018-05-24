const axios = require('axios');
const cache = {}
const Graphql = async (ctx) => {
  const query = ctx.request.body;
  const queryFunc = async data => new Promise((resolve, reject) => {
    console.log(
      '是否相等',
      Object.keys(cache)  === data
    )
    if(cache[data]){
      console.log('get data from cache')
      resolve(cache[data]);
    } else {
      console.log('get data from github')
      axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
          Authorization: `bearer ${process.env.access_token}`,
          'Content-Type': 'application/json',
        },
        data,
      })
        .then( res => {
          cache[data] = res.data,
          resolve(res.data);
        });
    }
  });
  ctx.body = await queryFunc(query);
};

module.exports = Graphql;
