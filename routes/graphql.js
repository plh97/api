const axios = require('axios');

class Cache {
  constructor(){
    this.cache = [];
  }

  getCache(key){
    this.cache.find(e => e.key === key);
  }

  addCache({key,val}){
    // 添加
    const isExist = this.getCache(key);
    if(isExist){
      // 如果有数组，那就直接返回它，
      return isExist
    } else {
      // 如果没有，那么push
      this.cache.push({key,val});
      return {key,val}
    }
  }
}

const cache = new Cache()


const Graphql = async (ctx) => {
  const query = ctx.request.body;
  const queryFunc = async data => new Promise((resolve, reject) => {
    console.log('是否相等')
    console.log(cache.getCache(data))
    console.log(data)
    const isExist = cache.getCache(data);
    if(isExist){
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
          cache.addCache({
            key: data,
            val: res.data
          });
          resolve(res.data);
        });
    }
  });
  ctx.body = await queryFunc(query);
};

module.exports = Graphql;
