let message = "Stensucaioerylstce";
let length = message.length;

for (let i = 0; i < length; i++) {
    // length of each array
    let key = i + 1;
    let array = [];

    // number of arrays
    let arrayCount = Math.ceil(length / key);

    let index = 0;
    let pointer = key;

    for (let j = 1; j <= arrayCount; j++) {
        let part = message.slice(index, pointer);
        array.push(part);
        index += key;
        pointer += key;
    }

    let result = "Key: " + key + " = ";

    // for each symbol
    for (let j = 0; j <= key; j++) {
        // in each array
        for (let k = 0; k < array.length; k++) {
            let symbol = array[k][j];
            if (symbol != undefined) {
                result += symbol;
            }
        }
    }

    console.log(result);
}