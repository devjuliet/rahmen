const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const retrospectivesSchema = Schema({
    _what_went_well : String,
    _what_could_be_improved: String,
    _commit_to_improve: String
});
const schema = Schema({
    _sprintId: Number,
    _projectId: Number,
    _backlogType: String,
    _retrospective: retrospectivesSchema,
    _endDate: Date
});
class Sprint{
    constructor(sprintId,projectId,backlogType,retrospective,endDate) {
        this._sprintId = sprintId;
        this._projectId = projectId;
        this._backlogType = backlogType;
        this._retrospective = retrospective;
        this._endDate = endDate;
    }
    get sprintId() {
        return this._sprintId;
    }
    get projectId() {
        return this._projectId;
    }
    get backlogType() {
        return this._backlogType;
    }
    get retrospective() {
        return this._retrospective;
    }
    get endDate() {
        return this._endDate;
    }
    set sprintId(v) {
        this._sprintId = v;
    }
    set projectId(v) {
        this._projectId = v;
    }
    set backlogType(v) {
        this._backlogType = v;
    }
    set retrospective(v) {
        this._retrospective = v;
    }
    set endDate(v) {
        this._endDate = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Sprint);
module.exports = mongoose.model('Sprint', schema);