//CRE8.INTERVAL
module.exports = {
	interval: function(callback, delay) {
	    var counter = 0;
	    var start = new Date().getTime();
	    function delayed(){
	        callback(delay);
	        counter ++;
	        var diff = (new Date().getTime() - start) - counter * delay;
	        setTimeout(delayed, delay - diff);
	    }
	    delayed();
	    setTimeout(delayed, delay);
	},
	init: function(){
		//CORE IMPORTS ... () BASED ON BUILD
		//TODO: APP SPECIFIC 'DAEMON'
		//TODO: PEER BUILD
		//TODO: APP-APP CONNECTION
	},
};