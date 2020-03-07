//SELF CONFIG
//DEFINE DYNAMICALLY . . .
module.exports = {

	blueprints :{},

	bootstrap: function(cb) {
		initApp.init();
		cb();
	},

	hookTimeout: 10000000,

	//TODO: REMOVE
	//TODO: PUT IN APP
	datastores: {
	  'default': {
	    adapter: 'sails-mongo',
	    //url: 'mongodb://heroku_vt7lbmkd:757kfop5h6loqicvfph68q41le@ds219648-a0.mlab.com:19648,ds219648-a1.mlab.com:19648/heroku_vt7lbmkd?replicaSet=rs-ds219648'
	  }
	},

	globals: {
	   _: require('lodash'),
	   async: require('async'),
	   models: true,
	   services: true,
	   sails: true,
	},

	http: {
		middleware: {
			//prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
			order: [
				'cookieParser',
				'session',
				'bodyParser',
				//'prerender',
				'compress',
				'poweredBy',
				'$custom',
				'router',
				'www',
				'favicon',
			],
		}
	},

	i18n: {},
	log: {},

	//REDUCE GLOBAL MODEL DEFINITIONS 
	//APPCECIFIC INHERITANCE 
	//META MODEL APP . . .
	models: {
		fetchRecordsOnUpdate: true,
		fetchRecordsOnCreate: true,
		fetchRecordsOnCreateEach: true,
		migrate: 'safe',
		datastore: 'default',
		attributes: {
			createdAt: { type: 'ref', columnType: 'datetime', autoCreatedAt: true, },
			updatedAt: { type: 'ref', columnType: 'datetime', autoUpdatedAt: true, },
			id: { type: 'string', columnName: '_id' }
		},
		dataEncryptionKeys: {default: 'V7TZVUpF5WLGg2c2eRVaSx0p3/4Ef11ZujTaY4EVdpY='},
	},

	passport: {
	  local: {
	    strategy: require('passport-local').Strategy
	  },

	  //bearer: {
	  //  strategy: require('passport-http-bearer').Strategy
	  //},

	  twitter: {
	    name: 'Twitter',
	    protocol: 'oauth',
	    strategy: require('passport-twitter').Strategy,
	    options: {
	      consumerKey: 'your-consumer-key',
	      consumerSecret: 'your-consumer-secret'
	    }
	  },

	  facebook: {
	    name: 'Facebook',
	    protocol: 'oauth2',
	    strategy: require('passport-facebook').Strategy,
	    options: {
	      clientID: 'your-client-id',
	      clientSecret: 'your-client-secret',
	      scope: ['email'] /* email is necessary for login behavior */
	    }
	  },

	  google: {
	    name: 'Google',
	    protocol: 'oauth2',
	    strategy: require('passport-google-oauth').OAuth2Strategy,
	    options: {
	      clientID: 'your-client-id',
	      clientSecret: 'your-client-secret'
	    }
	  }

	},

	policies:{
	  '*': true,
	  '*': [ 'passport' ]
	},

	routes:{

		//DYNAMIC PEER DEFINED --> THIS IS STATIC
		'get /': 'HomeController.index',
		'get /about': 'HomeController.index',
		'get /login': 'HomeController.index',
		'get /logout': 'AuthController.logout',
		'get /register': 'HomeController.index',
		'get /posts': 'HomeController.index',
		'get /projects': 'HomeController.index',
		'get /token': 'HomeController.index',
		'post /auth/local': 'AuthController.callback',
		'post /auth/local/:action': 'AuthController.callback',

		'get /api/user': 'UserController.get',
		'post /api/user': 'UserController.create',
		'post /api/user/:id': 'UserController.update',

		'get /api/post': 'PostController.get',
		'post /api/post': 'PostController.create',
		'post /api/post/:id': 'PostController.update',
	},

	security:{
		cors:{
			allRoutes: true,
			allowOrigins: '*'
		}
	},

	session:{

	  secret: 'ab5b21a569493ca31834e3827c09b4ed',

	  // cookie: {
	  //   maxAge: 24 * 60 * 60 * 1000
	  // },

	  // adapter: 'redis',
	  // host: 'localhost',
	  // port: 6379,
	  // ttl: <redis session TTL in seconds>,
	  // db: 0,
	  // pass: <redis auth password>,
	  // prefix: 'sess:',

	  // adapter: 'mongo',
	  // host: 'localhost',
	  // port: 27017,
	  // db: 'sails',
	  // collection: 'sessions',

	},

	//TODO:NETWORKING ..
	//TODO: SHARE SOCKETS AMONST PEERS
	sockets:{

	  // adapter: 'memory',
	  // adapter: 'redis',
	  // host: '127.0.0.1',
	  // port: 6379,
	  // db: 'sails',
	  // pass: '<redis auth password>'

	  beforeConnect: function(handshake, cb) {
	    //console.log(session);
	    //User.getSession.then(function(session){})
	    //console.log(sails.session.User)
	    return cb(null, true);
	  },

	  afterDisconnect: function(session, socket, cb) {
	    //console.log(session.user)
	    //if (session.User){
	      //console.log(session.User.id);
	    //}
	    return cb();
	  },

	},

	views:{
	  extension: 'ejs',
	  layout: 'layout',
	  partials: false
	}

}