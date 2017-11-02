/**
 * Route Mappings
 * (sails.config.routes)
 *
 */

module.exports.routes = {


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

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',
  'post /api/user': 'UserController.create',

  /**
   * Post routes
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'get /api/post/url/:path': 'PostController.getByUrlTitle',
  'post /api/post': 'PostController.create',
  'post /api/post/:id': 'PostController.update',
  'delete /api/post/:id': 'PostController.destroy',

};
