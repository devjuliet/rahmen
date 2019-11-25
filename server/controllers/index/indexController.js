const express = require('express');
const async = require('async');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');


const jwtKey = config.get("secret.key");

module.exports = {
  login: (req, res, next)=>{
    async.parallel({
      user: (callback) =>{
        User.findOne({_email: req.body.email})
            .select('_password _salt')
            .exec(callback)
      }
    }, (err, result)=>{
      if(result.user){
        bcrypt.hash(req.body.password, result.user.salt, (err, hash)=>{
          if(hash === result.user.password){
            res.send(jwt.sign(result.user.id, jwtKey));
          }else{
            res.send('wrong 2');
          }
        });
      }else{
        res.send('wrong');
      }
    });
  }
};
