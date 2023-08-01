let users = [
  {
    name: "Іван",
    age: 25,
    hobby: "подорожі",
    employed: true,
    programming_languages: ["JavaScript", "Python"],
  },
  {
    name: "Марія",
    age: 30,
    hobby: "фотографія",
    employed: true,
    programming_languages: ["Java", "C++", "HTML", "CSS"],
  },
  {
    name: "Олександр",
    age: 22,
    hobby: "спорт",
    employed: false,
    programming_languages: [],
  },
  {
    name: "Ірина",
    age: 27,
    hobby: "читання",
    employed: true,
    programming_languages: ["JavaScript", "PHP"],
  },
  {
    name: "Петро",
    age: 35,
    hobby: "готування",
    employed: true,
    programming_languages: ["Python"],
  },
  {
    name: "Анна",
    age: 28,
    hobby: "малювання",
    employed: false,
    programming_languages: [],
  },
  {
    name: "Віктор",
    age: 24,
    hobby: "музика",
    employed: true,
    programming_languages: ["Java", "Kotlin"],
  },
  {
    name: "Ольга",
    age: 29,
    hobby: "танці",
    employed: true,
    programming_languages: ["Ruby", "Rails"],
  },
  {
    name: "Юрій",
    age: 32,
    hobby: "гра на гітарі",
    employed: true,
    programming_languages: ["C#", "Unity"],
  },
  {
    name: "Тетяна",
    age: 26,
    hobby: "садівництво",
    employed: false,
    programming_languages: [],
  },
];
const findUser =users.find(user => user.name === "Тетяна")
findUser.programming_languages.push('css')
console.log(findUser);

const ageOfUsers = [...users].sort((FirstUser, SecondUser) => FirstUser.age - SecondUser.age);
console.log(ageOfUsers);

const sortedUsers = [... users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name))
.flatMap(user => user.programming_languages)
.filter((programming_language, index, array) => array.indexOf(programming_language) === index)
console.log(sortedUsers);