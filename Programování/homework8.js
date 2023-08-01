// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
//   const keys = Object.keys(user)
//   for (const key in user) {
//     console.log(`${key}:${user[key]}`);
//   }
//===================================================
// let amount;
// const bankAccount = {
//     balance : 30000,
//     getBalance(){
//     console.log(this.balance);
//     },
//     withdraw(amount){
//     const making = prompt('Enter the amount you want to withdraw')
//     if (Number(making) < this.balance) {
//         console.log(`you borrowed ${Number(making)}`);
//         this.balance = (this.balance - Number(making))
//         console.log(this.balance)
//     } else {
//       console.log("You don't have enough funds in your account");  
//     }
//     },
//     deposit (amount){
//     const put = prompt('Enter the amount you want to put')
//     console.log(`you deposit ${Number(put)}`);
//     this.balance = (this.balance + Number(put))
//     console.log(this.balance)
//     },
    
//     }
//     bankAccount.withdraw(amount);
//     bankAccount.deposit(amount);
   //==============================================================
  //  const products = [
  //   { name: 'Радар', price: 1300, quantity: 4 },
  //   { name: 'Сканер', price: 2700, quantity: 3 },
  //   { name: 'Дроид', price: 400, quantity: 7 },
  //   { name: 'Захват', price: 1200, quantity: 2 },
  // ];
  // const calculateTotalPrice = function(allProdcuts, productName) {
  //   for (const product of allProdcuts) {
  //     if (product.name === productName) {
  //       return product.price * product.quantity
  //     }
  //   }
  // };
  
  // console.log(calculateTotalPrice(products, 'Радар')); 
  
  // console.log(calculateTotalPrice(products, 'Дроид')); 
// ===============================================================
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy'
// user.hobby= 'skydiving';
// user.premium = false;
// console.log(user);
