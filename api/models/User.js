module.exports = {
    attributes: {
        username: {type: 'string', required: true, unique: true},
        email: {type: 'email', required: true, unique: true},
        firstName: {type: 'string', required: true},
        lastName: {type: 'string', required: true},
        passports : { collection: 'Passport', via: 'user' }
    },
};