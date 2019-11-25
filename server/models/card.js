const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _cardId: Number,
    _backlogId:Number,
    _cardPriority: Number,
    _cardName: String,
    _role: String,
    _feature: String,
    _benefict: String,
    _context: String,
    _events: [String],
    _results: [String]
});
class Card{
    constructor(cardId,backlogId,cardPriority,cardName,role,feature,benefict,context,events,results) {
        this._cardId = cardId;
        this._backlogId = backlogId;
        this._cardPriority = cardPriority;
        this._cardName = cardName;
        this._role = role;
        this._feature = feature;
        this._benefict = benefict;
        this._context = context;
        this._events = events;
        this._retults = results;
    }
    get cardId() {
        return this._cardId;
    }
    get backlogId() {
        return this._backlogId;
    }
    get cardPriority() {
        return this._cardPriority;
    }
    get cardName() {
        return this._cardName;
    }
    get role() {
        return this._role;
    }
    get feature() {
        return this._feature;
    }
    get benefict() {
        return this._benefict;
    }
    get context() {
        return this._context;
    }
    get events() {
        return this._events;
    }
    get results() {
        return this._retults;
    }
    set cardId(v) {
        this._cardId = v;
    }
    set backlogId(v) {
        this._backlogId = v;
    }
    set cardPriority(v) {
        this._cardPriority = v;
    }
    set cardName(v) {
        this._cardName = v;
    }
    set role(v) {
        this._role = v;
    }
    set feature(v) {
        this._feature = v;
    }
    set benefict(v) {
        this._benefict = v;
    }
    set context(v) {
        this._context = v;
    }
    set events(v) {
        this._events = v;
    }
    set results(v) {
        this._retults = v;
    }
}
schema.plugin(mongoosePaginate);
schema.loadClass(Card);
module.exports = mongoose.model('Card', schema);