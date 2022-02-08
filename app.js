const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('index');
});
app.get('/meetings',(req, res) => {
    res.render('meetings');
});
app.get('/meeting-details',(req, res) => {
    res.render('meeting-details');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});