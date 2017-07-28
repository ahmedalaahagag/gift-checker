//----------------------------------------------------------------------------------------------------------------------
// Routes for accounts
//
// @module accounts.js
//----------------------------------------------------------------------------------------------------------------------

import _ from 'lodash';
import express from 'express';
import routeUtils from './utils';

//----------------------------------------------------------------------------------------------------------------------

var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('gifts', ['gifts']);
var expressValidator = require('express-validator');
router.use(expressValidator())

//----------------------------------------------------------------------------------------------------------------------
// REST Endpoints
//----------------------------------------------------------------------------------------------------------------------


router.get('/', function(req, resp)
{

    routeUtils.interceptHTML(resp, function()
    {
        db.gifts.find(function(err, docs){
            return resp.json(docs);
        });
    });
});
router.get('/:id/bought', function(req, resp)
{
    routeUtils.interceptHTML(resp, function()
    {
        req.checkBody('id','Id is required').notEmpty();
        var id = req.body.id;
        db.gifts.update({id:id},  {bought: true},function () {
           return resp.json(true);
        })
    });
});
//----------------------------------------------------------------------------------------------------------------------

export default router;

//----------------------------------------------------------------------------------------------------------------------