let devConfig = {
	appid: "wxe30cede54b52ad59", //公众号的appid
	secret: "4dbe98acc46ea4bac12253bce72ecaa9", //公众号的secret 重要不要暴露给前端
	wxapi: "https://api.weixin.qq.com/cgi-bin",
	mchid: '1516290891', // 商户ID,
	partnerKey: '8B13cvnBrdWwMvXcDW6kJeYMiSlmlWMa',
	pfx: ''
};
let prodConfig = {
	appid: "wxe30cede54b52ad59", //公众号的appid
	secret: "4dbe98acc46ea4bac12253bce72ecaa9", //公众号的secret 重要不要暴露给前端
	wxapi: "https://api.weixin.qq.com/cgi-bin",
	mchid: '1516290891', // 商户ID,
	partnerKey: '8B13cvnBrdWwMvXcDW6kJeYMiSlmlWMa',
	pfx: 'xxxxx'
};

let config = process.env.NODE_ENV === 'prod' ? prodConfig : devConfig;
module.exports = config;