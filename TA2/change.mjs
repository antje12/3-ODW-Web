const units = [
    1000,
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1
]

export function change(amount) {

    let result = [];

    while (amount > 0) {
        let unitToSubtract = biggestMatchingUnit(amount);
        result.push(unitToSubtract);
        amount -= unitToSubtract;
    }

    return result;
}

function biggestMatchingUnit(amount) {

    let result;
    for (let unit of units) {
        if (amount >= unit) {
            result = unit;
            break;
        }
    }
    return result;
}
