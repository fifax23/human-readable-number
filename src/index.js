module.exports = function toReadable(number) {
    let stringifyNumber = String(number);
    const store = {
        1: ["one", "ten", "one hundred"],
        2: ["two", "twenty", "two hundred"],
        3: ["three", "thirty", "three hundred"],
        4: ["four", "forty", "four hundred"],
        5: ["five", "fifty", "five hundred"],
        6: ["six", "sixty", "six hundred"],
        7: ["seven", "seventy", "seven hundred"],
        8: ["eight", "eighty", "eight hundred"],
        9: ["nine", "ninety", "nine hundred"],
        teens: {
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },
    };
    let outputNumber = "";
    let numberIndex = 0;
    if (stringifyNumber === "0") {
        return "zero";
    }
    for (let i = 0; i < stringifyNumber.length; i++) {
        if (stringifyNumber[i] === "0") {
            continue;
        }
        if (
            stringifyNumber.length === 2 &&
            stringifyNumber[0] === "1" &&
            stringifyNumber !== "10"
        ) {
            outputNumber = store["teens"][stringifyNumber];
            return outputNumber;
        }
        numberIndex = stringifyNumber.length - i;
        if (
            numberIndex === 2 &&
            stringifyNumber[numberIndex - 1] === "1" &&
            stringifyNumber[numberIndex] !== "0" &&
            stringifyNumber.length !== 2
        ) {
            outputNumber += ` ${
                store["teens"][stringifyNumber.slice(numberIndex - 1)]
            }`;
            break;
        }
        outputNumber += ` ${store[stringifyNumber[i]][numberIndex - 1]}`;
    }
    return outputNumber.trim();
};
