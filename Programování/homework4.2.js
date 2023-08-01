const quantity = prompt ('How many drones do you want to buy?')
const money = 30000
const price = 3400
const message = "Не вистачає коштів на рахунку"
    const refusal2 = "Відмінено користувачем!"
    console.log( quantity);
const totalPrice = (quantity * price)
const remainder = (money - totalPrice)
if (Number(quantity) < 9 && quantity !== null) {
    console.log(`Ви купили ${quantity} дронів , на рахунку залишилось ${remainder} гривень`);
} else if (quantity === null) {
    console.log(refusal2);
}
 else {
    const refusal = confirm (message)
} 