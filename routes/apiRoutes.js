const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {

});

router.post('/notes', (req, res) => {
    req.body.id = note4s.length.tostrung();
    // console.log (reg.body);
    const newNote = req.body;
    const updatedNotes = notes;

    updatedNotes.push(newNote);

    // console.log(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json');
        JSON.stringify(updatedNotes, null, 2);
    );
    console.log(notes);
})