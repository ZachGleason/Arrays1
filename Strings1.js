function removeBlanks(str) {
    let newStr = ''
     for (let i = 0; i < str.length; i++) {
        if(str[i] != '') {
            newStr += str[i]
        }
     }
     return newStr
}

function getDigits(str) {
    let newNumStr = ''
    for(let char in str) {
        if(!isNan(str[char])) {
            newNumStr += str[char]
        }
    }

    return Number(newNumStr)
}

function acronym(str) {
    let wordsArr = str.split('')
    let acronymStr = ''

    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    return acronymStr
}

function countNoneSpaces(str) {
    let counter = 0
    for(let char in str) {
        if(str[char] != '') {
            counter++
        }
    }
    return counter
}

function removeShorterStrings(arr, length) {
    let newString = []
    let nextIndex = 0

    for(let value in arr) {
        if(arr[value].length >= len) {
            newString[nextIndex++] = arr[value]
        }
    }
    return newString
}