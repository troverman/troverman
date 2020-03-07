const crypto = require('crypto');
module.exports = {
	//config:{
	//	routes:
	//}
	get: async function(req, res) {
		var query = {};
		if (req.param.id){query = {id:req.param.id}}
		if (req.param.path){query = {url_title: req.param.path};}
		var models = await Post.find(query);
		res.json(models);
	},
	create: async function (req, res) {
		var model = {
			title: req.param('title'),
			post_content: req.param('content'),
			user: req.param('user')
		};
		model.hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var post = await Post.create(model)
		res.json(post);
	},
	update: async function(req, res) {
		var id = req.param('id');
		var model = {
			title: req.param('title'),
			content: req.param('content'),
			user: req.param('user')
		};
		var model = await Post.update({id: id}, model);
		res.json(model);
	},
};

