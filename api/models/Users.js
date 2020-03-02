/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'number',
      autoIncrement: true
    },
    username: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string'
    },
    fullname: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    level: {
      type: 'number'
    },
    
    createdAt: false,
    updatedAt: false,
  },

};

