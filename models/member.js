const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const skillSchema = Schema({_language : String, _rank: String});
const schema = Schema({
    _devId: Number,
    _devName : String,
    _devTeam: Number,
    _devBirthDate: Date,
    _devCurp : String,
    _devRfc : String,
    _devAddress : String,
    _devSkills : [skillSchema]
});
class Member{
    constructor(devId,devName,devTeam,devBirthDate,devCurp,devRfc,devAddress,devSkills){
        this._devId = devId;
        this._devName = devName;
        this._devTeam = devTeam;
        this._devBirthDate = devBirthDate;
        this._devCurp = devCurp;
        this._devRfc = devRfc;
        this._devAddress = devAddress;
        this._devSkills = devSkills;
    }
    get devId() {
        return this._devId;
    }
    get devName() {
        return this._devName;
    }
    get devTeam() {
        return this._devTeam;
    }
    get devBirthDate() {
        return this._devBirthDate;
    }
    get devCurp() {
        return this._devCurp;
    }
    get devRfc() {
        return this._devRfc;
    }
    get devAddress() {
        return this._devAddress;
    }
    get devSkills() {
        return this._devSkills;
    }
    set devId(v) {
        this._devId = v;
    }
    set devName(v) {
        this._devName = v;
    }
    set devTeam(v) {
        this._devTeam = v;
    }
    set devBirthDate(v) {
        this._devBirthDate = v; 
    }
    set devCurp(v) {
        this._devCurp = v;
    }
    set devRfc(v) {
        this._devRfc = v;
    }
    set devAddress(v) {
        this._devAddress = v;
    }
    set devSkills(v) {
        this._devSkills = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Member);
module.exports = mongoose.model('Member', schema);