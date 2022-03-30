const router = require('express').Router();
const store = require('../db/store');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const {response} = require('express');
const {ok} = require('assert');
const store = require('../db/store')

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
 store.getStore().then(storeResponse => res.json(storeResponse)).catch(err=>res.json(err));
})

router.post("/api/store", function(req, res){
  var storeObj = {
    title:req.body.title,
    text: req.body.text,
    id:uuidv4()
  }
  store.getStore().then(storeResponse => [...storeResponse,storeObj]).then(newStoreArray=Store.writefile(newStoreArray)).the(()=> storeObj);
  try{
    res.json({msg:"ok"})
  } catch (error){
    res.json(error);
  }
})



module.exports = router;
