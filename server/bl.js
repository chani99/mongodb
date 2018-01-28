var dal = require('./dal');
var models = require('./models');

function getProducts(callback) {
    dal.executeQuery('SELECT * FROM `products`', function(err, rows) {
        if (err) {
            callback(err);
        }

        const ProductsObjectsArray = [];
        rows.forEach(function (row) {
            ProductsObjectsArray.push(new models.Prudcts(row));
        });
        callback(null, ProductsObjectsArray);
    });
}

function newProduct(data, callback){
    // let data = JSON.parse(dataa);

            let column;
            let values;
                column="ProductName, QuantityPerUnit, ReorderLevel, SupplierID, UnitPrice, UnitsInStock, UnitsOnOrder";
                values=`'${data.ProductName}', '${data.QuantityPerUnit}', ${data.ReorderLevel}, ${data.SupplierID}, ${data.UnitPrice}, ${data.UnitsInStock}, ${data.UnitsOnOrder}`;
          
            let sql = "INSERT INTO `products` (" + column + ") VALUES (" + values + ")";
            dal.executeQuery(sql, function (err, result) {
                if (err) console.log(err);
                callback(null, "1 record inserted");
              });
}
                            
                


module.exports.products = {
    getProducts: getProducts,
    newProduct: newProduct
}