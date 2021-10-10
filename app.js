const { urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/router.js');

const app = express();

mongoose.connect('mongodb://localhost:27017/Konferencija', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.set('views', 'view/');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.use(router);

// app.use(function (err, req, res, next){
//     console.log('Doslo je do greske');
//     console.log(err);
//     res.render('error.ejs',{
//         message: err.message,
//     });
// });

module.exports = app;
