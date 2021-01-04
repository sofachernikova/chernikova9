console.log ('Задание 1')
let season = {
    country: 'Москва',
    seasonName: 'зима',
    minTemp: '-20°C',
    maxTemp: '+5°C'
};
console.log ('Список свойств: ' + Object.keys(season))
console.log ('В городе ' + season.country + ' сейчас ' + season.seasonName + ', температура колеблется от ' + season.minTemp + ' до ' + season.maxTemp)