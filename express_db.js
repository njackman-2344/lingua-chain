const fs= require('fs');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const json = require('./database_char.json');
const {checkApprove} = require('./dao.js');



app.use(express.json());

//test
app.get('/', (req, res) => {
    res.send('api is running');
 });

const dataPath= path.join(__dirname, 'database_char.json');
let char=require(dataPath);


//get character by id
app.get('/', (req, res) => {
    res.send(json);
});

//add a new character
app.post('/add', (req, res) => {
    const character = req.body;
    json.push({'dao_id':{},'word':{},'symbol':{}});
    //update file
fs.writeFileSync(dataPath, JSON.stringify(json, null, 2));
    res.send('word added to database');
});

//delete a word
app.delete('/delete', (req, res) => {
    const { id } = req.params;
    const character = json.find((word) => character.dao_id === id);
    json = json.filter((word) => character.dao_id !== id);
    //update file
    fs.writeFileSync(dataPath, JSON.stringify(json, null, 2));
    res.send('word deleted');
});



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});