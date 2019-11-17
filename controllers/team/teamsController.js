const express = require('express');
const Team = require('../../models/team');
const n = 2;
function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: n
    };

    Team.paginate({}, options)
        .then(team => {
            res.json({
                message: 'Ok',
                error: false,
                objs: team
            });
        })
        .catch(() => {

        });
}
function index(req, res, next) {
    let id = req.params.id;
    let query = Team.findOne({ _teamId: id });
    query.exec((err, resp) => {
        if (err) { }
        res.json(resp);
    });
}
function create(req, res, next) {
    let teamId = req.body.teamId;
    let teamName = req.body.teamName;
    let projects = [];
    let team = new Team({
        _teamId : teamId,
        _teamName : teamName,
        _projects : projects
    });
    team.save()
        .then((obj) => {
            res.json(obj);
        })
        .catch((err) => {
            res.status(500).json({});
        });
}
function update(req, res, next) {
    let id = req.params.id;
    Team.findOne({ _teamId: id }, (err, obj) => {
        if (err) { }
        else {
            obj._teamName = req.body.teamName ? req.body.teamName : obj._teamName;
            //Si es arreglo lo mas natural es pushearle al arreglo que ya se supone debe de traer
            if (Array.isArray(req.body.project)){
                req.body.project.forEach(element => {
                    obj._projects.push(element);
                });
            }
            //Si no es arreglo, es tratado como un numero y si de plano no viene, no pasa nada
            else if (req.body.project){ 
                obj._projects.push(req.body.project)
            }
            
            obj.save()
                .then(o => {
                    res.status(200).json({
                        errors: [],
                        data: o
                    });
                })
                .catch(err => { });////Todo: Errors
        }
    });
}
function destroy(req, res, next) {
    let id = req.params.id;
    Team.findOneAndDelete({ _teamId: id }, (err, resp) => {
        res.status(200).json({
            errors: [],
            data: resp
        });
    });
}
module.exports = {
    list, index, create, update, destroy
}