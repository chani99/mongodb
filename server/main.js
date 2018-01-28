var express = require('express');
var bodyParser = require("body-parser");
var mongod = require("mongoose");

var fs = require('fs');

// ctrls
var ProductsCtrl = require('./ProductsController');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../../app/client'));
app.use('/public', express.static('../../app/client'));
app.use('/node_modules', express.static('../../app/node_modules'));



// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('../../app/client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }

        res.end(data) 
    });
   
});

// Listen to '/product' in GET Verb methods
app.get('/products', function (req, res) {
    ProductsCtrl.Read(function(err, products) {
        if (err) {
            res.end('error!');
        }
        res.end(JSON.stringify(products));
    })
});

// Listen to '/product' in POST Verb methods
 app.post('/products', function (req, res) {
    ProductsCtrl.Put(req.query.data, function(err, ans) {
        if (err) {
            res.end('error!');
        }
        res.end(JSON.stringify(ans));
    })

 })


// Start the server
var server = app.listen(8081, function () {
    console.log('listening to 8081')
})
