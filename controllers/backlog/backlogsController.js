const express = require('express');
const Backlog = require('../../models/backlog');
function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 2
    };

    Backlog.paginate({}, options)
        .then(backlogs => {
            res.json({
                message: 'Ok',
                error: false,
                objs: backlogs 
            });
        })
        .catch(() => {

        });
}
function index(req, res, next){
    let id = req.params.id;
    let query = Backlog.findOne({_backlogId: id});
    query.exec((err,resp) =>{
        if (err){}
        res.json(resp);
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
      res.json(obj);
    })
    .catch((err)=>{
      res.status(500).json({});
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
                    errors: [],
                    data: o
                });
            })
            .catch(err =>{});////Todo: Errors
        }
    });
}

function destroy(req,res,next){
    let id = req.params.id;
    Backlog.findOneAndDelete({_backlogId : id},(err,resp) =>{
        res.status(200).json({
            errors: [],
            data: resp
        });
    });
}
module.exports = {
    list,index,create,update,destroy
}
  