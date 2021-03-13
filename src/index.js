module.exports = function toReadable (number) {
  if (number === 0) {
        return 'zero';
    }

    var uniqueNumbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    var unique10Numbers = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    var tenNumbers = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    var hundredNumbers = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    }

    if (number < 10) {
        return uniqueNumbers[number];
    } else if (number < 100) {
        if (number < 20) {
            return unique10Numbers[number];
        } else {
            let string = tenNumbers[+number.toString().split('')[0]] + ' ' + uniqueNumbers[+number.toString().split('')[1]];
            return string.trim();
        }
    } else if (number < 1000) {
        let tens = number - (+number.toString().charAt(0) * 100);
        let string;

        if (tens < 10) {
            string = hundredNumbers[+number.toString().split('')[0]] + ' ' + uniqueNumbers[tens];
        } else if (tens < 20) {
            string = hundredNumbers[+number.toString().split('')[0]] + ' ' + unique10Numbers[tens];
        } else {
            string = hundredNumbers[+number.toString().split('')[0]] + ' ' + tenNumbers[+number.toString().split('')[1]] + ' ' + uniqueNumbers[+number.toString().split('')[2]];
        }

        return string.trim();
    } else {
        return 0;
    }
}

