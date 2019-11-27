const express = require('express');
const Backlog = require('../../models/backlog');
function list(req, res, next) {
    let query = Backlog.find({});
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
    let query = Backlog.findOne({_backlogId: id});
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
    let backlogId = req.body.backlogId;
    let projectId = req.body.projectId;
    let backlogType = req.body.backlogType;
    let endDate = req.body.endDate;
    let backlog = new Backlog({_backlogId : backlogId,_projectId: projectId,_backlogType: backlogType,_endDate: endDate});  
    backlog.save()
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
    Backlog.findOne({_backlogId: id},(err,obj) =>{
        if (err){}
        else{
            obj._backlogType = (req.body.backlogType) ? req.body.backlogType : obj._backlogType;
            obj._endDate = (req.body.endDate) ? req.body.endDate : obj._endDate;
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
    Backlog.findOneAndDelete({_backlogId : id},(err,resp) =>{
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
  