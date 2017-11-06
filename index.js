/**
 * Created by center ON 17-11-6
 */
const _ = require('lodash');
var request = require('request');
const defaultOptions =
	{
		url:"https://open.ys7.com/api/lapp/token/get",
		appKey:"9mqitppidgce4y8n54ranvyqc9fjtsrl&appSecret=096e76501644989b63ba0016ec5776",
		appSecret:""
	};
var APPTOKEN = function (options) {
	this.options = _.merge({}, defaultOptions, options);
	
};
APPTOKEN.prototype = {
	getToken : function () {
		var that = this;
		return new Promise(function(resolve, reject){
			request({
				url: that.options.url,
				method: "POST",
				json: true,
				headers: {
					"content-type": "application/x-www-form-urlencoded",
				},
				form: {
					appKey:that.options.appKey,
					appSecret:that.options.appSecret
				}
			}, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					if(body.code == 200){
						resolve({
							status:200,
							data:body.data
						});
					}
					else{
						reject({
							status:800,
							msg:body.msg
						});
					}
				}else{
					reject({
						status:800,
						msg:error
					});
				}
			});
		});
	}
};
module.exports = APPTOKEN;