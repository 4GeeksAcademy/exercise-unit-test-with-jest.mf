

const {fromEuroToDollar, fromDollarToYen,fromYenToPound, } = require('./app.js');

// Test de conversion de moneda
// Euro a Dolar

test("1 euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

// Dolar a Yen
test("1.07 dolar should be 156.5 yen", function() {
    const dollars = fromDollarToYen(1.07);
    const expected = 1.07 * 156.5;
    expect(fromDollarToYen(1.07)).toBe(167.455);
})

// Yen a Pound
test("156.5 yen should be 0.87 pound", function() {
    const pound = fromYenToPound(156.5);
    const expected = 156.5 * 0.87;
    expect(fromYenToPound(164.43)).toBe(143.0541);
})
