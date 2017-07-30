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
var ObjectId = db.ObjectId;

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
        var id = req.params.id;
        db.gifts.update({_id:ObjectId(id)},{
            $set:{bought: true},
            $currentDate:{lastModified: true}}
            ,function () {
           return resp.json(true);
        })
    });
});
//----------------------------------------------------------------------------------------------------------------------

export default router;

//----------------------------------------------------------------------------------------------------------------------