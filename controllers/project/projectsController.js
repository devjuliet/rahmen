const express = require('express');
const Project = require('../../models/project');

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 2
    };

    Project.paginate({}, options)
        .then(projects => {
            res.json({
                message: res.__('ok'),
                error: false,
                objs: projects 
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        });
}

function index(req, res, next){
    let id = req.params.id;
    let query = Project.findOne({_projectId: id});
    query.exec((err,resp) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        }else{
            res.status(200).json({
                message: res.__('ok'),
                error: false,
                objs: resp
            });
        }
    });
}

function create(req, res, next){
    let projectId = req.body.projectId;
    let projectName = req.body.projectName;
    let applicationDate = req.body.applicationDate;
    let startDate = req.body.startDate;
    let projectDescription = req.body.projectDescription;
    let projectManager = req.body.projectManager;
    let productOwner = req.body.productOwner;
    let developmentTeam = req.body.developmentTeam;

    let project = new Project({_projectId: projectId,_projectName: projectName,_applicationDate: applicationDate, _startDate:startDate,
                                _projectDescription:projectDescription,_projectManager: projectManager,_productOwner: productOwner,
                                _developmentTeam:developmentTeam});  
    project.save()
    .then((obj)=>{
        res.status(200).json({
            message: res.__('ok'),
            error: false,
            objs: obj
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message: res.__('error'),
            error: true,
            objs: err
        });
    });
}

function update(req,res,next){
    let id = req.params.id;
    Project.findOne({_projectId: id},(err,obj) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        }
        else{
            obj._projectName = (req.body.projectName) ? req.body.projectName : obj._projectName;
            obj._applicationDate = (req.body.applicationDate) ? req.body.applicationDate : obj._applicationDate;
            obj._startDate = (req.body.startDate) ? req.body.startDate : obj._startDate;
            obj._projectDescription = (req.body.projectDescription) ? req.body.projectDescription : obj._projectDescription;
            obj._projectManager = (req.body.projectManager) ? req.body.projectManager : obj._projectManager;
            obj._productOwner = (req.body.productOwner) ? req.body.productOwner : obj._productOwner;
            obj._developmentTeam = (req.body.developmentTeam) ? req.body.developmentTeam : obj._developmentTeam;
            obj.save()
            .then(o =>{
                res.status(200).json({
                    message: res.__('ok'),
                    error: false,
                    objs: o
                });
            })
            .catch(err =>{
                res.status(500).json({
                    message: res.__('error'),
                    error: true,
                    objs: err
                });
            });
        }
    });
}

function destroy(req,res,next){
    let id = req.params.id;
    Project.findOneAndDelete({_projectId : id},(err,resp) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        }else{
            res.status(200).json({
                message: res.__('ok'),
                error: false,
                objs: resp
            });
        }
    });
}

module.exports = {
    list,index,create,update,destroy
}

