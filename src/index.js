module.exports = function toReadable(number) {
    let numbersS = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let numbersT = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let numbersTh = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    } else if (number < 10) {
        return numbersS[number];
    } else if (number < 20) {
        return numbersT[number % 10];
    } else if (number < 100) {
        return (
            numbersTh[Math.floor(number / 10)] +
            " " +
            numbersS[number % 10]
        )
            .trim()
            .replace("  ", " ");
    } else {
        return (
            numbersS[Math.floor(number / 100)] +
            " " +
            "hundred" +
            " " +
            (number % 100 < 20 && number % 100 > 9
                ? numbersT[Math.floor((number % 100) % 10)]
                : numbersTh[Math.floor((number % 100) / 10)] +
                  " " +
                  numbersS[number % 10])
        )
            .trim()
            .replace("  ", " ");
    }
};
