const express = require('express');
const Sprint = require('../../models/sprint');
function list(req, res, next) {
    let query = Sprint.find({});
    query.exec((err,resp) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: error
            });
        }
        res.status(200).json({
            message: res.__('ok'),
            error:false,
            objs: resp
        });
    });
}
function index(req, res, next){
    let id = req.params.id;
    let query = Sprint.findOne({_sprintId: id});
    query.exec((err,resp) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: error
            });
        }
        res.status(200).json({
            message: res.__('ok'),
            error:false,
            objs: resp
        });
    });
}
function create(req, res, next){
    let sprintId = req.body.sprintId;
    let projectId = req.body.projectId;
    let backlogType = req.body.backlogType;
    let retrospective = {_what_went_well : "",
    _what_could_be_improved: "",
    _commit_to_improve: ""}
    let endDate = req.body.endDate;
    let sprint = new Sprint({
        _sprintId : sprintId,
        _projectId: projectId,
        _backlogType: backlogType,
        _retrospective: retrospective,
        _endDate: endDate
    });  
    sprint.save()
    .then((obj)=>{
      res.status(200).json({
          error: false,
          message: res.__('ok'),
          objs: obj
      });
    })
    .catch((err)=>{
      res.status(500).json({
          message: res_('error'),
          error: true,
          objs: err
      });
    });
}
function update(req,res,next){
    let id = req.params.id;
    Sprint.findOne({_sprintId: id},(err,obj) =>{
        if (err){}
        else{
            obj._backlogType = (req.body.backlogType) ? req.body.backlogType : obj._backlogType;
            obj._endDate = (req.body.endDate) ? req.body.endDate : obj._endDate;
            if (req.body.what_went_well && req.body.what_could_be_improved && req.body.commit_to_improve){
                obj._retrospective = {
                    _what_went_well : req.body.what_went_well,
                    _what_could_be_improved: req.body.what_could_be_improved,
                    _commit_to_improve: req.body.commit_to_improve
                }
            }
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
    Sprint.findOneAndDelete({_backlogId : id},(err,resp) =>{
        if (err){
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        }
        else{
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
  