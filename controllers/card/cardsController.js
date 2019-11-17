const express = require('express');
const Card = require('../../models/card');

function list(req, res, next) {
    let page = req.params.page ? req.params.page : 1;
    const options = {
        page: page,
        limit: 2
    };

    Card.paginate({}, options)
        .then(cards => {
            res.json({
                message: 'Ok',
                error: false,
                objs: cards 
            });
        })
        .catch(() => {

        });
}

function index(req, res, next){
    let id = req.params.id;
    let query = Card.findOne({_cardId: id});
    query.exec((err,resp) =>{
        if (err){}
        res.json(resp);
    });
}

function create(req, res, next){
    let cardId = req.body.cardId;
    let backlogId = req.body.backlogId;
    let cardPriority = req.body.cardPriority;
    let cardName = req.body.cardName;
    let role = req.body.role;
    let feature = req.body.feature;
    let benefict = req.body.benefict;
    let context = req.body.context;
    let events = req.body.events;
    let results = req.body.results;

    let card = new Card({_cardId: cardId,_backlogId:backlogId,_cardPriority:cardPriority,_cardName:cardName,_role:role,
                                _feature:feature,_benefict:benefict,_context:context,_events:events,_results:results});  
    card.save()
    .then((obj)=>{
      res.json(obj);
    })
    .catch((err)=>{
      res.status(500).json({});
    });
}

function update(req,res,next){
    let id = req.params.id;
    Card.findOne({_cardId: id},(err,obj) =>{
        if (err){}
        else{
            obj._backlogId = (req.body.backlogId) ? req.body.backlogId : obj._backlogId;
            obj._cardPriority = (req.body.cardPriority) ? req.body.cardPriority : obj._cardPriority;
            obj._cardName = (req.body.cardName) ? req.body.cardName : obj._cardName;
            obj._role = (req.body.role) ? req.body.role : obj._role;
            obj._feature = (req.body.feature) ? req.body.feature : obj._feature;
            obj._benefict = (req.body.benefict) ? req.body.benefict : obj._benefict;
            obj._events = (req.body.events) ? req.body.events : obj._events;
            obj._results = (req.body.results) ? req.body.results : obj._results;
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
    Card.findOneAndDelete({_cardId : id},(err,resp) =>{
        res.status(200).json({
            errors: [],
            data: resp
        });
    });
}

module.exports = {
    list,index,create,update,destroy
}