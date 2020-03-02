/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': 'is-logged-in',
  // by passing login
  loginController: {
    'login': true,
    'sign_up': true
  },
  // require admin rule
  userController: {
    'list': 'is-admin',
    'delete': 'is-admin',
    'update_user': 'is-logged-in',
    'update_admin': 'is-admin',
  }

};
