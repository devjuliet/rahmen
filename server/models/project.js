const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = Schema({
    _projectId: Number,
    _projectName: String,
    _projectStatus: String,
    _applicationDate: Date,
    _startDate: Date,
    _projectDescription: String,
    _projectManager: Number,
    _productOwner: Number,
    _developmentTeam: Number
});
class Project {
    constructor(projectId, projectName, applicationDate, startDate, projectDescription, projectManager, productOwner, developmentTeam) {
        this._projectId = projectId;
        this._projectName = projectName;
        this._applicationDate = applicationDate;
        this._startDate = startDate;
        this._projectDescription = projectDescription;
        this._projectManager = projectManager;
        this._productOwner = productOwner;
        this._developmentTeam = developmentTeam;
    }
    /////////Getters///////////////////
    get projectId() {
        return this._projectId;
    }
    get projectName() {
        return this._projectName;
    }
    get projectStatus() {
        return this._projectStatus;
    }
    get applicationDate() {
        return this._applicationDate;
    }
    get startDate() {
        return this._startDate;
    }
    get projectDescription() {
        return this._projectDescription;
    }
    get projectManager() {
        return this._projectManager;
    }
    get productOwner() {
        return this._productOwner;
    }
    get developmentTeam() {
        return this._developmentTeam;
    }
    //////////////////Setters//////////////////
    set projectId(v) {
        this._projectId = v;
    }
    set projectName(v) {
        this._projectName = v;
    }
    set projectStatus(v) {
        this._projectStatus = v;
    }
    set applicationDate(v) {
        this._applicationDate = v;
    }
    set startDate(v) {
        this._startDate = v;
    }
    set projectDescription(v) {
        this._projectDescription = v;
    }
    set projectManager(v) {
        this._projectManager = v;
    }
    set productOwner(v) {
        this._productOwner = v;
    }
    set developmentTeam(v) {
        this._developmentTeam = v;
    }
}
schema.loadClass(Project);
module.exports = mongoose.model('Project', schema);
