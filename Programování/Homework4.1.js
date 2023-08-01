const country = prompt('Enter Country')
let cost
const normalizedToUpperCaseInput = country.toUpperCase()
switch (normalizedToUpperCaseInput) {
    case 'CHINA':
        cost = 100
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів.`)
        break
    case 'JAPAN':
        cost = 250
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів.`)
        break
    case 'AUSTRIA':
        cost = 170
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів.`)
        break
    case 'CZECH':
        cost = 80
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів.`)
        break
    case 'POLAND':
        cost = 120
        console.log(`Доставка в ${country} буде коштувати ${cost} кредитів.`)
        break
    default:
        console.log('У вашій країні доставка не доступна')
        break
}
