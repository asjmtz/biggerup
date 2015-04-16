# API

> RESTful架构
	1. 每一个URI代表一种资源；
	2. 客户端和服务器之间，传递这种资源的某种表现层；
	3. 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"；
	4. GET用来获取资源，POST用来新建资源（也可以用于更新资源），PUT用来更新资源，DELETE用来删除资源。



**请求返回值的定义**
```
res: 返回状态码 
1 = 成功，
0 = 失败，

msg: 返回信息
```

## 用户系统

### 用户注册 -  `/user/register`

新建一条用户记录
```
[req] - POST
{
	username: '', // 邮箱
	password: '',
	repassword: ''
}

[res]
{
	data:{
		id: '' , // 用户id
	}
	res: 0,
	msg: '',
}
```

### 用户登录 - `/user/login`

查找用户记录，并记录 session
```

[req] - PUT
{
	username: '',
	passward: ''
}
[res]
{
	data:{
		id: '' , // 用户id
	},
	res: '',
	msg: '',
}

```

### 用户退出 - `/user/logout`

删除session

```
[req] - PUT
{
	uid: '', //用户id 
}
[res]
{
	res: '',
	msg: '',
}

```

### 用户信息 - `/user/info`

用户信息查看

```
[req] - GET
{
	uid: '', //用户id
}
[res]
{	
	data: {
		id: '',
		username: '',
		avatar: '',
		signature: '',
		sex: '',
		career: '',
		region: '',
		created_at: '',
	},
	res: '',
	msg: '',
}
```

用户信息更新

```
[req] - PUT
{
	id: '', // 必需的 required
	avatar: '' //下面是 optional
	... : ...	
}
[res]
{
	res: '',
	msg: '',
}
```

## 文章系统

### 文章列表 - `/article/list`

查看文章列表
```
[req] - GET
{
	//下面是 optional，是搜索的条件，没有写选项的时候就全选
	user_id: '', // 按照用户搜索
	title: '', // 按照题目搜索
	category: '' // 按照分类搜索	
}
[res]
{
	data: {
		id: '',
		user_id: '',
		title: '',
		description: '',
		category: '',
		progress: '',
		public: '',
		thumb_up: '',
		created_at: '',
		updated_at: ''
	},
	res: '',
	msg: '',
}
```


