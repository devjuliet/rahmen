const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _devName : String,
    _devTeam: Number,
    _devBirthDate: Date,
    _devCurp : String,
    _devRfc : String,
    _devAddress : String,
    _devSkills : {
        type : Map,
        of : String
    }
});