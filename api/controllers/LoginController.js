/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var jwt = require('jsonwebtoken');

module.exports = {
  sign_up: async function (req, res) {
    let user = await userService.create(req);
    switch (user) {
      case 'ERROR':
        return res.json({
          status: 'ERR',
          message: 'Lỗi truy vấn'
        })

      default:
        return res.json({
          status: 'success',
          message: 'Đăng ký thành công',
          user: user
        })
    }
  },
  login: async function (req, res) {
    let user = await userService.login(req);
    switch (user) {
      case 'ERROR':
        return res.json({
          status: 'ERROR',
          message: 'Đăng nhập không thành công'
        })


      default:       
      res.json({
        status: 'success',
        message: 'Đăng nhập thành công ',
        user: user,
        token: jwToken.issue({id: user.id, role: user.level })
      })
    }
  }

};
