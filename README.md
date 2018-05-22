# api
个人api制作


### upload 只支持图片上传
```js
axios.post('https://api.pipk.top/upload',{
	...相关图片参数吧。暂时没想到
}).then(res=>{
	res: {
		name: '文件名',
		url: '访问地址'
	}
},err=>{
	err: 错误捕捉
})
```


### common auto set user && password
```bash
$ git config credential.helper store
$ git push http://github.com/pengliheng/repo.git
Username: <type your username>
Password: <type your password>
```

Also I suggest you to read
```
$ git help credentials
```