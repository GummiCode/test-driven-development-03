const {
    scan, 
    addItem, 
    viewTotal, 
    removeItem
} = require("../src/barcode.js");

//Test Data
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

//Variables
let basket;

beforeEach(() => {
    basket = [];
});

// scan tests

describe("scanItem", () => {

    it('Returns the data for a scanned item via its barcode property', () => {
        const barcode1 = "b101";
        const expected = b101;
        const result = scan(barcode1, database);
        expect(result).toEqual(expected);
        });


    it('Returns the data for a scanned item via its barcode property', () => {
        const barcode2 = "b102";
        const expected = b102;
        const result = scan(barcode2, database);
        expect(result).toEqual(expected);
        });

    it('Returns the data for a scanned item via its barcode property', () => {
        const barcode3 = "b103";
        const expected = b103;
        const result = scan(barcode3, database);
        expect(result).toEqual(expected);
        });

    it('Returns the data for a scanned item via its barcode property', () => {
    const barcode4 = "b104";
    const expected = b104;
    const result = scan(barcode4, database);
    expect(result).toEqual(expected);
    });
});

// end scan tests-----------------------------------------


//addItem tests

describe("addItem", () => {

    it('Adds an item to the empty basket array via its barcode property', () => {
        const item1 = b101;
        const expected = [b101];
        addItem(item1, basket);
        expect(basket).toEqual(expected);
    });

    it('Adds an item to the non-empty basket array via its barcode property', () => {
        basket = [b101, b102];
        const item2 = b102;
        const expected = [b101, b102, b102];
        addItem(item2, basket);
        expect(basket).toEqual(expected);
    });

    it('Adds an item to the non-empty basket array via its barcode property four times.', () => {
        basket = [b101];
        const item2 = b102;
        const item3 = b103;
        const item4 = b104;
        const expected = [b101, b102, b103, b104, b104];
        addItem(item2, basket);
        addItem(item3, basket);
        addItem(item4, basket);
        addItem(item4, basket);
        expect(basket).toEqual(expected);
    });
});

//end addItem tests -----------------------------------


// viewTotal tests

describe("viewTotal", () => {

    it("returns the total cost of the items in the basket array", () => {
        basket = [b101];
        const expected = 0.10;
        const result = viewTotal(basket);
        expect(result).toEqual(expected);

    });

    it("returns the total cost of the items in the basket array", () => {
        basket = [b101, b102, b103, b103, b103, b104];
        const expected = 1.60;
        const result = viewTotal(basket);
        expect(result).toEqual(expected);
    });

    it("returns the total cost of the items in the basket array", () => {
        basket = [b103, b104];
        const expected = 0.70;
        const result = viewTotal(basket);
        expect(result).toEqual(expected);
    });
});

// end viewTotal tests ---------------------------



//removeItem tests

describe("removeItem", () => {

    it("removes an item from the basket via its barcode", () => {
        basket = [b101, b102, b103, b104];
        const expected = [b101, b103, b104];
        const result = removeItem(basket, "b102");
        expect(result).toEqual(expected);
    });

    it("removes an item from the basket via its barcode", () => {
        basket = [b101];
        const expected = [];
        const result = removeItem(basket, "b101");
        expect(result).toEqual(expected);
    });

    it("removes an item from the basket via its barcode. Only removes one instance of that item", () => {
        basket = [b101, b101, b102, b102, b103, b103, b104];
        const expected = [b101, b101, b102, b102, b103, b104];
        const result = removeItem(basket, "b103");
        expect(result).toEqual(expected);
    });
});

//end removeItem tests ----------------------------