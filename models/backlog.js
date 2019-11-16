const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _backlogId: Number,
    _projectId: Number,
    _backlogType: String,
    _endDate: Date
});
class Backlog{
    constructor(backlogId,projectId,backlogType,endDate) {
        this._backlogId = backlogId;
        this._projectId = projectId;
        this._backlogType = backlogType;
        this._endDate = endDate;
    }
    get backlogId() {
        return this._backlogId;
    }
    get projectId() {
        return this._projectId;
    }
    get backlogType() {
        return this._backlogType;
    }
    get _endDate() {
        return this._endDate;
    }
    set backlogId(v) {
        this._backlogId = v;
    }
    set projectId(v) {
        this._projectId = v;
    }
    set backlogType(v) {
        this._backlogType = v;
    }
    set _endDate(v) {
        this._endDate = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog', schema);