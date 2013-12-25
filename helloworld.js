var crypto = require('crypto');
console.log('Hello motherfucker');

var sha512 = function(data, rounds, salt) {
	if (!rounds || rounds <= 1) {
		if (salt) { data = salt+data; }
		return crypto.createHash('sha512').update(data).digest('base64');
	}
	else {
		if (salt) { data = salt+data; }
		for (i=0;i<rounds;i++){
			data = crypto.createHash('sha512').update(data).digest('base64');
		}
		return data;
	}

}
var d = new Date();
s = d.getTime();
console.log(sha512("1234567thisIsMYs3xy@ssPassWORd", 10000000, "OHMYFUCKINGGOD!#!%^!#)(^"));
d = new Date();
e = d.getTime();

t = e-s;
console.log("Execution took " + t + " miliseconds.");