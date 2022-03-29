const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json') ;
const { v4: uuidv4} = require('uuid');

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () =>
console.log(`Note app listening at http://localhost:${port}`)
);

app.use(express.static("public"));
app.use(express.json());

app.get('/notes', (req,res) => {
    res.sendFile(path.join(_dirname, 'public/notes.html'));
});

app.get('*', (req,res) =>
res.sendFile(path.join(_dirname, 'public/index.html'))
);

app
