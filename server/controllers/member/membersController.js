const express = require('express');
const Member = require('../../models/member');
function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 2
    };

    Member.paginate({}, options)
        .then(member => {
            res.status(200).json({
                message: res.__('ok'),
                error: false,
                objs: member
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
function index(req, res, next) {
    let id = req.params.id;
    let query = Member.findOne({ _devId: id });
    query.exec((err, resp) => {
        if (err) { 
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
function create(req, res, next) {
    let devId = req.body.devId;
    let devName = req.body.devName;
    let devTeam = req.body.devTeam;
    let devBirthDate = req.body.devBirthDate;
    let devCurp = req.body.devCurp;
    let devRfc = req.body.devRfc;
    let devAddress = req.body.devAddress;
    let devSkills = [];
    let member = new Member({ 
        _devId: devId,
        _devName: devName,
        _devTeam: devTeam,
        _devBirthDate: devBirthDate,
        _devCurp: devCurp,
        _devRfc: devRfc,
        _devAddress: devAddress,
        _devSkills: devSkills
    });
    member.save()
        .then((obj) => {
            res.status(200).json({
                message: res.__('ok'),
                error: false,
                objs: obj
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
function update(req, res, next) {
    let id = req.params.id;
    Member.findOne({ _devId: id }, (err, obj) => {
        if (err) { 
            res.status(500).json({
                message: res.__('error'),
                error: true,
                objs: err
            });
        }
        else {
            obj._devName = req.body.devName ? req.body.devName : obj._devName;
            obj._devTeam = req.body.devTeam ? req.body.devTeam : obj._devTeam;
            obj._devBirthDate = req.body.devBirthDate ? req.body.devBirthDate : obj._devBirthDate;
            obj._devCurp = req.body.devCurp ? req.body.devCurp : obj._devCurp;
            obj._devRfc = req.body.devRfc ? req.body.devRfc : obj._devRfc;
            obj._devAddress = req.body.devAddress ? req.body.devAddress : obj._devAddress;
            if(req.body.language && req.body.rank){obj._devSkills.push({_language: req.body.language, _rank: req.body.rank})}
            obj.save()
                .then(o => {
                    res.status(200).json({
                        message: res.__('ok'),
                        error: false,
                        objs: o
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: res.__('error'),
                        error: true,
                        objs: err
                    });
                 });
        }
    });
}
function destroy(req, res, next) {
    let id = req.params.id;
    Member.findOneAndDelete({ _devId: id }, (err, resp) => {
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
    list, index, create, update, destroy
}