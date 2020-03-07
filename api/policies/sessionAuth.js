module.exports = function(req, res, next) {
if (req.session.authenticated) {return next();}
	//TODO: SESSION APP
	//CONSENSUS CENTRIC 'SESSIONS'
	//PEER SESSION
		//PEER GROUP SESSION
	return res.forbidden('You are not permitted to perform this action.');
};
