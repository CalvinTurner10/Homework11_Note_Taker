const path=require('express').Path();
const Notes=require('../db/notes');
const fs = require("fs");
const {v4: uuidv4} = require('uuid');
const {response } = require('express');
const {ok} = require('assert');
const notes = require('../db/notes');
