 
//  Functions:
    //1. scan item
    //2. Add item to basket
    //3. View total cost of basket
    //4. Remove an item from the basket.

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

const removeItem = (basket, removedBarcode) => {
    const itemIndex = basket.findIndex(item => item.barcode === removedBarcode);
    basket.splice(itemIndex, 1);
    return basket;
};

module.exports = {scan, addItem, viewTotal, removeItem};