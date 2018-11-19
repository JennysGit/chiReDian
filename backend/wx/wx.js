// 获取微信配置信息
const request = require('request');
const Base64 = require('js-base64').Base64;
const wxConfig = require('./config/wxConfig');
const sign = require('./sign');

function getAccessToken() {
	return new Promise((resolve, reject) => {
		request.get(`${wxConfig.wxapi}/token?grant_type=client_credential&appid=${base.appid}&secret=${base.secret}`, function(error, response, body) {
			if (error !== null) {
				reject("获取access_token失败 检查getAccessToken函数");
			}
			resolve(JSON.parse(body));
		});
	})
}

function getTicket(access_token) {
	return new Promise((resolve, reject) => {
		request.get(`${base.wxapi}/ticket/getticket?access_token=${access_token}&type=jsapi`, function(error, response, body) {
			if (error !== null) {
				reject("获取api_ticket失败 检查getTicket函数");
			}
			resolve(JSON.parse(body));
		});
	});
}


async function getConfigData(href) {
	let configData;
	try {
		const accessTokenData = await getAccessToken();
		const ticketData = await getTicket(accessTokenData.access_token);
		const decodeHref = Base64.decode(href);
		configData = sign(ticketData.ticket, decodeHref);
		configData.appid = wxConfig.appid;
	} catch (err) {
		console.log(`config err: ${err}`);
		configData = {};
	}
	return configData;
}
module.exports = getConfigData;