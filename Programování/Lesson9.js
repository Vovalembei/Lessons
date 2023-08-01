// const users = ['Mango', 'Poly', 'Ajax'];

// const users2 = [...users];

// console.log(...[...[...users]]);
//=========================================================
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//=========================================================
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 76, 657, 6);
//========================================================
// const user = {
//   name: 'Mango',
//   password: '12344321',
//   age: '25',
//   gender: 'male',
//   companies: ['Apple', 'Google'],
//   socialNetwork: {
//     likes: 45453,
//     watches: 24324234324,
//   },
// };

// const { companies } = user;

// console.log(`${companies}`);

//========================================================

// const user = {
//   name: 'Mango',
//   password: '12344321',
//   age: '25',
//   gender: 'male',
//   companies: ['Apple', 'Google'],
//   socialNetwork: {
//     likes: 45453,
//     watches: 24324234324,
//   },
// };

// const { name: gfdgdfszfg = 'Poly' } = user;
// console.log(gfdgdfszfg);
// console.log(user);

//=================================================
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// for (const product of products) {
//   const { name, price, quantity } = product;

//   console.log(name, price, quantity);
// }
//=========================================================
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(userLikes); // 1308
//====================================================================
// const users = ['Mango', 'Poly', 'Ajax'];

// const [user1, user2, user3, user4 = 'Lux'] = users;
// console.log(user1, user2, user3, user4);
//====================================================================
// const users = ['Mango', 'Poly', 'Ajax'];

// const [, , user1] = users;
// console.log(user1);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// function showUserInfo({ name, tag }) {
//   console.log(name, tag);
// }

// showUserInfo(user);
//=================================================================================
// const formatString = function (string) {
//   if (string.length < 40) {
//     return string;
//   } else {
//     const array = string.slice(0, 40).split(' ');
//     array.push('...');
//     return array.join(' ');
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
//   )
// );
//===========================================================================
// const checkForSpam = function (message) {
//   const formattedMesasge = message
//     .toLowerCase()
//     .replaceAll('[', '')
//     .replaceAll(']', '');

//   if (formattedMesasge.includes('sale') || formattedMesasge.includes('spam')) {
//     return true;
//   } else return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true