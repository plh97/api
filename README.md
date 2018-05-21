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