module.exports = {
  login: async function (req, res) {
    let user = await Users.findOne({
        username: req.param('username'),
        password: req.param('password')
      }).then(find => {
        if (find.length != 0) {

          return find;
        } else {
          return "ERROR";
        }
      })
      .catch(() => "ERROR");
    return user;
  },
  create: async function (req, res) {
    let newUser = await Users.create({
        username: req.param('username'),
        password: req.param('password'),
        fullname: req.param('fullname'),
        address: req.param('address'),
      })
      .intercept('E_UNIQUE', () => new Error('Username đã tồn tại'))
      .fetch();
    // req.session.userId = newUser.id;
    return newUser;
  },
  list: async function (req, res) {
    let users = await Users.find().then(result => result);
    return users;
  },
  update_user: async function (req, res) {

    let user = await Users.update({
        id: req.token.id
      }, {
        username: req.param('username'),
        password: req.param('password'),
        fullname: req.param('fullname'),
        address: req.param('address'),
        level: req.param('level'),
      })
      .fetch();

    return user;
  },
  update_admin: async function (req, res) {

    let user = await Users.update({
        id: req.params.id
      }, {
        username: req.param('username'),
        password: req.param('password'),
        fullname: req.param('fullname'),
        address: req.param('address'),
        level: req.param('level'),
      })
      .fetch();

    return user;
  },
  delete: async function (req, res) {
    let user = await Users.destroy({
      id: req.params.id
    }).fetch();
    return user;
  }
}
