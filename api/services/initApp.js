//THE META-CIRCULAR CONNECTOR 
const self = {
	//connections:{
		connections:{
			connection:{
				params:{},
			}
		}
	//},
};
module.exports = {
	//SETS OF MAPPINGS AS OBJECTS
	//THIS IS WHERE IT ALL STARTS
	init:function(){
		//GLOBALS!!
		//PEER COMPILE . . . 
		await orbitdbApp.init();
		passport.loadStrategies();
		//START INTERVALS
		intervalServiceApp.init();
	},
};