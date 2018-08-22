const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
app.get('/', function (req, res) {
    // NEW CODE
    res.render('index');
})

app.get('/page', function (req, res) {
    // NEW CODE
    res.render('page');
})
app.get('/anotherpage', function (req, res) {
    // NEW CODE
    res.render('anotherpage');
})

app.get('/contact', function (req, res) {
    // NEW CODE
    res.render('contact');
})

app.get('/example', function (req, res) {
    // NEW CODE
    res.render('ram');
})