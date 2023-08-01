// Є массив користувачів.
// let users = [
//   {
//     name: "Іван",
//     age: 25,
//     hobby: "подорожі",
//     employed: true,
//     programming_languages: ["JavaScript", "Python"],
//   },
//   {
//     name: "Марія",
//     age: 30,
//     hobby: "фотографія",
//     employed: true,
//     programming_languages: ["Java", "C++", "HTML", "CSS"],
//   },
//   {
//     name: "Олександр",
//     age: 22,
//     hobby: "спорт",
//     employed: false,
//     programming_languages: [],
//   },
//   {
//     name: "Ірина",
//     age: 27,
//     hobby: "читання",
//     employed: true,
//     programming_languages: ["JavaScript", "PHP"],
//   },
//   {
//     name: "Петро",
//     age: 35,
//     hobby: "готування",
//     employed: true,
//     programming_languages: ["Python"],
//   },
//   {
//     name: "Анна",
//     age: 28,
//     hobby: "малювання",
//     employed: false,
//     programming_languages: [],
//   },
//   {
//     name: "Віктор",
//     age: 24,
//     hobby: "музика",
//     employed: true,
//     programming_languages: ["Java", "Kotlin"],
//   },
//   {
//     name: "Ольга",
//     age: 29,
//     hobby: "танці",
//     employed: true,
//     programming_languages: ["Ruby", "Rails"],
//   },
//   {
//     name: "Юрій",
//     age: 32,
//     hobby: "гра на гітарі",
//     employed: true,
//     programming_languages: ["C#", "Unity"],
//   },
//   {
//     name: "Тетяна",
//     age: 26,
//     hobby: "садівництво",
//     employed: false,
//     programming_languages: [],
//   },
// ];
// const employedPerson = users.filter(user => user.employed ===true)
// console.log(employedPerson);

// const programming = users.flatMap (user => user.programming_languages)
// console.log(programming);

// const programmers = users.filter(user => user.programming_languages.length === 0 )
// console.log(programmers);

// const hobbies = users.filter(user => user.hobby === "музика")
// console.log(hobbies);
// Завдання :
// 1) Вивести в консоль тільки тих користувачів, які є працевлаштованими. ready
// 2) Отримати массив знань мов програмування всіх користувачів (використати flatMap) ready
// 3) Створити новий масив, де вказано, чи мають користувачі хоча б одне знання мови програмування. ready
// 4) Вибрати користувачів з хобі "музика" ready


// 2) Є функція.Вона приймає массив чисел і повертає обєкт у якому : сума чисел массиву, найменше число в массиві , та найбільше число в массиві.
// function  getNumbersSum (numbers){
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     return sum;
// }
// function findMaxNumber(numbers) {
//     const max = Math.max(...numbers);
//     return max;
// }
// function findMinNumber(numbers) {
//     const min = Math.min(...numbers);
//     return min;
// }
// const analyzeNumbers = (numbers, getNumbersSum, findMaxNumber, findMinNumber) =>{
//   if (!Array.isArray(numbers)) {
//     throw new Error("Параметр повинен бути масивом чисел");
//   }

//   if (numbers.length === 0) {
//     return {
//       sum: 0,
//       max: undefined,
//       min: undefined
//     };
//   }
//   return {
//     sum: getNumbersSum(numbers),
//     max: findMaxNumber(numbers),
//     min: findMinNumber(numbers),
//   };
// }
// console.log(analyzeNumbers([5,6,12,2,7,43,23], getNumbersSum, findMaxNumber, findMinNumber));
// Перепиши цю функцію на стрілочну функцію , аргументами якої повинні бути колбеки.
// Колбеків повинно бути 3. getNumbersSum( повертає суму чисел) , findMaxNumber (повертає найбільше число), findMinNumber (повертає найменше число)
// Функція повинна повертати ось такі значення : { sum: 98, max: 43, min: 2 };