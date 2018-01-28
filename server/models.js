function Prudcts(cust) {
            
        if(cust.CategoryID) this.CategoryID = cust.CategoryID;
        if(cust.Discontinued) this.Discontinued = cust.Discontinued;
        if(cust.ProductID) this.ProductID = cust.ProductID;
        if(cust.ProductName) this.ProductName = cust.ProductName;
        if(cust.QuantityPerUnit) this.QuantityPerUnit = cust.QuantityPerUnit;
        if(cust.ReorderLevel) this.ReorderLevel = cust.ReorderLevel;
        if(cust.SupplierID) this.SupplierID = cust.SupplierID;
        if(cust.UnitPrice) this.UnitPrice = cust.UnitPrice;
        if(cust.UnitsInStock) this.UnitsInStock = cust.UnitsInStock;
        if(cust.UnitsOnOrder) this.UnitsOnOrder = cust.UnitsOnOrder;
}

module.exports.Prudcts = Prudcts;


// if(cust.CategoryID) this.CategoryID = cust['CategoryID'];
// if(cust.Discontinued) this.Discontinued = cust['Discontinued'];
// if(cust.ProductID) this.ProductID = cust['ProductID'];
// if(cust.ProductName) this.ProductName = cust['ProductName'];
// if(cust.QuantityPerUnit) this.QuantityPerUnit = cust['QuantityPerUnit'];
// if(cust.ReorderLevel) this.ReorderLevel = cust['ReorderLevel'];
// if(cust.SupplierID) this.SupplierID = cust['SupplierID'];
// if(cust.UnitPrice) this.UnitPrice = cust['UnitPrice'];
// if(cust.UnitsInStock) this.UnitsInStock = cust['UnitsInStock'];
// if(cust.UnitsOnOrder) this.UnitsOnOrder = cust['UnitsOnOrder'];
