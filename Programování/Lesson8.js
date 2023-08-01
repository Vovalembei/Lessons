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

// console.log(user);
//==========================================================
// const user = {
//   name: 'default name',
// };
// user.name = prompt('enter the name ');
// console.log(user);

// const user = {
//   name: 'Mango',
//   companies: ['Apple', 'Googele', 'Microsoft'],
//   getCompanies() {
//     console.log(this.companies, this.name);
//   },
// };
// user.getCompanies();

//=================================================================

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

// for (const key in user) {
//   console.log(user[key]);

// }

//==========================================================================
// const user = {
//   name: 'Mango',
//   password: false,
//   age: '25',
//   gender: 'male',
//   companies: ['Apple', 'Google'],
//   socialNetwork: {
//     likes: 45453,
//     watches: 24324234324,
//   },
// };

// console.log(user.hasOwnProperty('password'));

// const keys = Object.keys(user);
// console.log(keys);
// const values = Object.values(user);
// console.log(values);
//=============================================================================

// const users = [
//   {
//     name: 'Mango',
//     age: '25',
//     id: 1,
//   },
//   {
//     name: 'Poly',
//     age: '17',
//     id: 2,
//   },
//   {
//     name: 'Vova',
//     age: '13',
//     id: 3,
//   },
// ];
// for (const user of users) {
//   console.log(user);
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length > 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login) === true) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login) === false) {
//     return 'Ошибка! Логин должен быть от 4 до 16 символов';
//   } else {
//     if (isLoginUnique(allLogins, login) === false) {
//       return 'Такой логин уже используется!';
//     } else {
//       logins.push(login);
//       return 'Логин успешно добавлен!';
//     }
//   }
// };

// console.log(addLogin(logins, 'Ajax'));
// console.log(addLogin(logins, 'robotGoogles'));
// console.log(addLogin(logins, 'Zod'));
// console.log(addLogin(logins, 'jqueryisextremelyfast'));