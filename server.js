const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./Develop/db/db.json') ;
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

app.post('/api/notes', (req,res) =>{
    if (req.body) {
        let note = req.body;
        console.log(req.body);
        note.id = uuidv4();
        db.push(note);
        fs.writeFile('./db/db.json', JSON.stringify(db), (err,data) =>{
            if (err) {
                console.log ('Data is : + data');
                throw err;
            }
        });
        res.status(200).json(note);
    }
});
