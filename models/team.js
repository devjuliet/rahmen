const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _teamId: Number,
    _teamName: String,
    _projects: [Number]
});
class Team {
    constructor(teamId,teamName,projects,members) {
        this._teamId = teamId;
        this._teamName = teamName;
        this._projects = projects;
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
    set teamId(v) {
        this._teamId = v;
    }
    set teamName(v) {
        this._teamName = v;
    }
    set projects(v) {
        this._projects = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Team);
module.exports = mongoose.model('Team', schema);