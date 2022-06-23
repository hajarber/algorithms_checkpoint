let str = "Go My Code ."

// Number of characters:
var CharLength = str.split('')

    CharLength = CharLength.filter(function (char) {
    return String(char).trim()
    });
let CountChar = CharLength.length

// Number of words
var arr = str.split(' ')
var New_arr = arr.pop()
let CountWords = arr.length

//Number of vowels
const vowels = ["a", "e", "i", "o", "u"]

function VowelsNumber(str) {

    let countVowels = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            countVowels++;
        }
    }
    return countVowels
}