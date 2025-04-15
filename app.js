
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = (valueInEuro) => {
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = (valueInEuro) => {
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound };
