const crypto = require('crypto');
module.exports = {
	get: async function(req, res) {
		var query = {};
		if (req.param.id){query = {id:req.param.id}}
		if (req.param.path){query = {url_title: req.param.path};}
		var models = await User.find(query);
		res.json(models);
	},
	//CREDIENTIALS ... PEER CENTRIC THO ... HASH IT 
	getMine: async function(req,res){
		var me = req.user.id;
		var user = await User.findOne(me).populate('passports')
		res.json(user);
	},
	create: async function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			title: req.param('title'),
			passports: req.param('passports')
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newUser = await User.create(model);
		res.json(newUser);	
	},
	//CREDIENTIALS (ID VS HASH)
	update: async function(req, res) {
		var id = req.param('id');
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			firstName: req.param('firstName'),
			lastName: req.param('lastName'),
			title: req.param('title'),
			passports: req.param('passports')
		};
		var model = await User.update({id: id}, model);
		res.json(model);
	},
};
