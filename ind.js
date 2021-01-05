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