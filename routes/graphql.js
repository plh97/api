const axios = require('axios');
const cache = {}
const Graphql = async (ctx) => {
  const query = ctx.request.body;
  const queryFunc = async data => new Promise((resolve, reject) => {
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
          cache[data] = {
            code: 200,
            data: res.data.data,
          }
          resolve(res.data.data);
        });
    }
  });
  ctx.body = await queryFunc(query);
};

module.exports = Graphql;
