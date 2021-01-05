// Задание №1
console.log ('Задание 1')
let season = {
    country: 'Москва',
    seasonName: 'зима',
    minTemp: '-20°C',
    maxTemp: '+5°C'
};
console.log ('Список свойств: ' + Object.keys(season))
console.log ('В городе ' + season.country + ' сейчас ' + season.seasonName + ', температура колеблется от ' + season.minTemp + ' до ' + season.maxTemp)

// Задание №2
console.log ('Задание 2')

arr([1, 2, 3, 4, 5]);
function arr(myArray) {
    let len = myArray.length;
    for (let i = 0; i < len; i++){
        if (myArray.length > 1) {
            console.log(myArray.pop() + ', осталось ' + myArray)
        } else {
            console.log(myArray[0])
        }
    }
}

// Задание №3
console.log ('Задание 3')

let word1 = 'аквариум'
let word2 = 'казак'
function checkPalindrom(str) {
    if (str == str.split("").reverse().join("")) {
        console.log('Слово ' + str + ' - палиндром');
    } else {
        console.log('Слово ' + str + ' - не палиндром');
    }

}

checkPalindrom(word1);
checkPalindrom(word2);

// Задание №4
console.log ('Задание 4')

function matr(c, matrix) {

    console.log('Исходная матрица');
    for(let row of matrix) {
        console.log(row.join('   '));
    }
    
    let n = matrix.length;
    let k = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < k; j++) {
            matrix[i][j] *= c;
        }
    }
    console.log('Матрица, умноженная на 2');
    for(let row of matrix) {
        console.log(row.join('   '));
    }
}
matr(2, [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]);