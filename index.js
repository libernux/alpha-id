
exports.options  = {
	index: 'olTGMfHymhQ-g39vazNFPOs_ru6nXe8DZxB7pLiJK20RSCYWj4tbUAVdk1q5EcwI'
}

exports.do = function (v,t) {
	t = (t === null) ? true : t;
	return (t === true) ? this.decode(v) : this.encode(v);
}

exports.encode = function (n) {
	n = parseInt(n);
		if('undefined' == typeof n){
	      return null;
	    }
	    else if('number' != typeof(n)){
	      throw new Error('Alpha-Id: Wrong parameter type!');
	    }
	    var ret = '';
	    for(var i=Math.floor(Math.log(parseInt(n))/Math.log(this.options.index.length));i>=0;i--){
	      ret = ret + this.options.index.substr((Math.floor(parseInt(n) / getBaseLog(this.options.index.length, i)) % this.options.index.length),1);
	    }
	    return ret.reverse();
}

exports.decode = function (s) {
	s = String(s);
	if('undefined' == typeof s){
	    return null;
	}
	else if('string' != typeof s){
	  throw new Error('Alpha-Id: Wrong parameter type!');
	}
	var str = s.reverse();
	var ret = 0;
	for(var i=0;i<=(str.length - 1);i++){
	   ret = ret + this.options.index.indexOf(str.substr(i,1)) * (getBaseLog(this.options.index.length, (str.length - 1) - i));
	}
	return ret;
}

//Private
function getBaseLog(x,y) {
	    return Math.floor(Math.pow(parseFloat(x), parseInt(y)));
};
String.prototype.reverse = function(){
		return this.split('').reverse().join('');
};