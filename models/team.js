const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _teamId: Number,
    _teamName: String,
    _projects: [Number],
    _members:[Number]
});
class Team {
    constructor(teamId,teamName,projects,members) {
        this._teamId = teamId;
        this._teamName = teamName;
        this._projects = projects;
        this._members = members;
    }
    get teamId() {
        return this._teamId;
    }
    get teamName() {
        return this._teamName;
    }
    get projects() {
        return this._projects;
    }
    get members() {
        return this._members;
    }
    set teamId(v) {
        this._teamId = v;
    }
    set teamName(v) {
        this._teamName = v;
    }
    set projects(v) {
        this._projects = v;
    }
    set members(v) {
        this._members = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Team);
module.exports = mongoose.model('Member', schema);