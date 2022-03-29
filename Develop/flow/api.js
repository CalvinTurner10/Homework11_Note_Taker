const flow = require('express').Router();
const Notes=require('../db/notes');
const fs = require("fs");
const {v4: uuidv4} = require('uuid');
const { response, Router} = require('express');
const {ok} = require('assert');
const notes = require ('../db/notes');

Router.get('/api/notes', (req,res) => {
    Notes.getNotes().then(notesReponse => res.json(notesResponse)).catch(err.json(err));
})

Router.post("/api/notes", function(req, res){
    var noteObj = {
        title: req.body.title,
        text: req.body.text,
        id:uuidv4()
    }
    Notes.getNotes().then()
})