const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const schema = Schema({
  _email:String,
  _name:String,
  _lastName:String,
  _password: String,
  _salt: String
});

class User {

  constructor(email, name, lastName, password, salt){
    this._email = email;
    this._name = name;
    this._lastName = lastName;
    this._password = password;
    this._salt = salt;
  }

  get email(){
    return this._email;
  }

  set email(v){
    this._email = v;
  }

  get name(){
    return this._name;
  }

  set name(v){
    this._name = v;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(v){
    this._lastName = v;
  }

  get password(){
    return this._password;
  }

  set password(v){
    this._password = v;
  }

  get salt(){
    return this._password;
  }

  set salt(v){
    this._salt = v;
  }
}

schema.plugin(mongoosePaginate);
schema.loadClass(User);
module.exports = mongoose.model('User', schema);
