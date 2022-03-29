const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json') ;
const { v4: uuidv4} = require('uuid');

const app = express();
