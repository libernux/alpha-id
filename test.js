var AlphaID = require('./index.js');
var s = AlphaID.do(4815162342 ,false);
var n = AlphaID.do(s,true);
if (( s === "iWroDM" ) && ( n === 4815162342 )){
	console.log('AlphaID is working fine!');
}