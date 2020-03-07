module.exports = {
	attributes: {
        title: {type: 'string', required: true, unique: true},
        content: {type: 'string', required: true},
        user: {model: 'user', required: true}
    }
};

