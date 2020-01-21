##说明
wood_requestBody的扩展,增加必填参数校验,需要在config中配置数组verifyParams以及对象errorCode
例子
```
	errorCode: {
		error_body_seqno: {code: 7, msg: '请求参数seqno不能为空'},
		error_body_cmd: {code: 8, msg: '请求参数cmd不能为空'},
		error_body_verifycode: {code: 9, msg: '请求参数verifycode不能为空'},
		error_body_version: {code: 10, msg: '请求参数version不能为空'},
	}, //错误码
	verifyParams: ['data', 'seqno', 'cmd', 'verifycode', 'version'],
```
errorCode格式为 `error_body_` + verifyParams中元素名。