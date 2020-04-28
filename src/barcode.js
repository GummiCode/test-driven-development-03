 
 
 
    //1. scan item
    //2. Add item to basket
    //3. View total cost of basket
    //4. Remove an item from the basket.

/*    /Test Data
const b101 = {
    item: "apple",
    cost: 0.10,
    barcode: "b101",
};

const b102 = {
    item: "banana",
    cost: 0.20,
    barcode: "b102",
};

const b103 = {
    item: "pear",
    cost: 0.30,
    barcode: "b103",
};

const b104 = {
    item: "orange",
    cost:0.40,
    barcode: "b104",
};

const database = [b101, b102, b103, b104];

Functions:
    scan, 
    addItem, 
    viewTotal, 
    removeItem
*/

const scan = (itemBarcode, database) => {
    return database.find(item => item.barcode === itemBarcode);
};

const addItem = (item, basket) => {
    basket.push(item);
};

const viewTotal = (basket) => {
    return basket.reduce(function (total, item) {
        return total += item.cost
    }, 0)
};


const removeItem = (basket, removeBarcode) => {
    

};

module.exports = {scan, addItem, viewTotal};