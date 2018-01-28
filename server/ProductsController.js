var bl = require('./bl');
var models = require('./models');

// CRUD
function read(callback) {

    bl.products.getProducts(function(err, custArray) {
        if (err) {
            callback(err);
        }

        callback(null, custArray);
    })
}

function put(dataa, callback) {
    let data = JSON.parse(dataa);

let nProduct = new models.Prudcts(data);
    bl.products.newProduct(data, function(err, res) {
        if (err) {
            callback(err);
        }

        callback(null, res);
    })
}



module.exports.Read = read;
module.exports.Put = put;