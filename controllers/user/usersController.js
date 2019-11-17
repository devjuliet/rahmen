const express = require('express');
const bcrypt = require('bcrypt');
const async = require('async');
const User = require('../../models/user');

function list(req, res, next){

}

function index(req, res, next){
  
}

function create(req, res, next){
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let password = req.body.password;

  async.parallel({
    salt: (callback)=>{
      bcrypt.genSalt(10, callback);
    }
  }, (err, result)=>{

    bcrypt.hash(password, result.salt, (err, hash) => {
      let user = new User({
        _email: email,
        _name: name,
        _lastName: lastName,
        _password: hash,
        _salt: result.salt
      });

      user.save().then((obj)=>{
        res.status(200).json({
          error: false,
          message: 'usuario creado correctamente',
          objs: obj
        });
      }).catch(err => res.status(500).json({
        error: true,
        message: 'usuario no se ha creado',
        objs: err
      }));
    });
  });
}

function update(req, res, next){
  
}

function destroy(req, res, next){
  
}

module.exports = {
  index, list, create, update, destroy
}
