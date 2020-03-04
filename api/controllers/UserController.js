/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  list: async function (req, res) {
    let users = await userService.list();
    switch (users) {
      case 'ERROR':
        return res.json({
          status: 'ERR',
          message: 'Lỗi truy vấn'
        })

      default:
        return res.json(users);
    }

  },

  update_admin: async function (req, res) {
    let user = await userService.update_admin(req);
    switch (user) {
      case 'ERROR':
        return res.json({
          status: 'ERR',
          message: 'Lỗi truy vấn'
        })

      default:
        return res.json({
          status: 'success',
          message: 'Đã sửa thành công',
          user: user
        });
    }

  },
  update_user: async function (req, res) {
    let user = await userService.update_user(req);
    switch (user) {
      case 'ERROR':
        return res.json({
          status: 'ERR',
          message: 'Lỗi truy vấn'
        })

      default:
        return res.json({
          status: 'success',
          message: 'Đã sửa thành công',
          user: user
        });
    }

  },
  delete: async function (req, res) {
    let user = await userService.delete(req);
    switch (user) {
      case 'ERROR':
        return res.json({
          status: 'ERR',
          message: 'Lỗi truy vấn'
        })

      default:
        return res.json({
          status: 'success',
          message: 'Đã xóa thành công',
          user: user
        });
    }
  },
  test: async function (req, res) {
   
     let a = await Test1.create({name: req.param('name')}).fetch();
      return res.json(a);
  }

};
