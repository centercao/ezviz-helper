/**
 * Created by center ON 17-11-6
 */
var AppToken = require("../index");
var appToken = new AppToken({
	appKey:"55ddfa8a01024abf883160fec03a83fc80",
	appSecret:"29fe191a5c55e0c3daf39a2e747dce26"
});

async function test() {
	var token = await appToken.getToken();
	console.log(token)
}
 test();