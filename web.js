const express = require('express');
const ThermoStat = require('./thermostat');
const app = express()
const port = 3000;

ts = new ThermoStat()

//sets the views
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req, res) => {res.render('index',{temp:`The Current Temperature Is ${ts.getTemperature()} C`})})

app.post('/up', (req, res) => {ts.up(); res.send('<form action="/"><button type="submit">Back</button></form> Up? In this economy?!')})
app.post('/down', (req, res) => {ts.down(); res.send('<form action="/"><button type="submit">Back</button></form> Cool cool.')})
app.get('/reset', (req,res) => {ts.reset(); res.send('<form action="/"><button type="submit">Back</button></form> ThermoStat reset.')})
app.get('/usage', (req, res) => {current = ts.getCurrentEnergyUsage(); res.send(`<form action="/"><button type="submit">Back</button></form> Your current usage is ${current}.`)})
app.post('/xpsm', (req, res) => {ts.powerSavingMode(false); res.send('<form action="/"><button type="submit">Back</button></form> Powersaving mode turned off.')})
app.post('/psm', (req, res) => {ts.powerSavingMode(true); res.send('<form action="/"><button type="submit">Back</button></form> Powersaving mode turned on.')})


console.log(`Server listening on localhost:${port}`);

app.listen(port);