/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /user/list': {
    controller: 'UserController',
    action: 'list'
  },

  'POST /login': {
    controller: 'LoginController',
    action: 'login'
  },

  'POST /sign-up': {
    controller: 'LoginController',
    action: 'sign_up',
  },

  //update for normal
  'PUT /user/edit': {
    controller: 'UserController',
    action: 'update_user'
  },

  // Update for admin
  'PUT /admin/edit/:id': {
    controller: 'UserController',
    action: 'update_admin',
  },

  'GET /admin/delete/:id': {
    controller: 'UserController',
    action: 'delete',
  },

  "POST /test": {
    controller: 'UserController',
    action: 'test'
  }



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
