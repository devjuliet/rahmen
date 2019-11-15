const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const schema = Schema({
    _projectName : String,
    _applicationDate: Date,
    _startDate: Date,
    _projectDescription: String,
    _projectManager : Number,
    _productOwner : Number,
    _developmentTeam : [Number]
});