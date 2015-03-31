
# API

P.S: 请求返回值的定义
```
res: 返回状态码 
1 = 成功，
0 = 失败，

msg: 返回信息
```

## 用户系统

### 用户注册
**/user/register**
```
[req] - POST
{
	username: '', // 邮箱
	password: '',
	repassword: ''
}

[res]
{
	res: 0,
	msg: '',
}
```

### 用户登录

**/user/login**
```

[req] - POST
{
	username: '',
	passward: ''
}
[res]
{
	
}

```

### 用户退出

**/user/exit**
