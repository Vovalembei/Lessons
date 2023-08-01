// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
// const color = colorPickerOptions.find(color => color.label === "red")
// console.log(color);
//===================================================================================

// const colorPickerOptions = [
//     5,
//     7,
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
//   const findIndex = colorPickerOptions.findIndex(color => color.label === "pink")
//   console.log(findIndex);
//===================================================================================
// const array = [6,54,3242,-32]

// console.log(array.every(element => element > 0));

//====================================================================================
// const array = [6,-54,3242,32]

// console.log(array.some(element => element < 0));
//=================================================================================
// const numbers = [4,6,5,3,7,23,641]
// const numbersSum = numbers.reduce((acc, number) => {
//   return   acc = acc + number
// }, 0)
// console.log(numbersSum);
//=================================================================================
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
//   ];
// const scoresSum = students.reduce((acc, student) => {
//  return acc+= student.score
// }, 0)
// console.log(scoresSum / students.length);
//==================================================================================
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
  
//   const getTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//       allTags.push(...tweet.tags);
  
//       return allTags;
//     }, []);

   
  
//   const tags = getTags(tweets);
//   console.log(tags);
  
//   // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//   // Це стандартна практика, якщо callback-функція досить велика.
  
//   // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//   // то створюємо її і записуємо їй значення 0.
//   // В іншому випадку збільшуємо значення на 1.
//   const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }

//     acc[tag] += 1;
  
//     return acc;
//   };
  
//   // Початкове значення акумулятора - це порожній об'єкт {}
//   const countTags = tags => tags.reduce(getTagStats, {});
  
//   const tagCount = countTags(tags);
//   console.log(tagCount);
//================================================================================
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort((a, b) => a - b);
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]
// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//     { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//     { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
//   ];
// // const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// // console.log(sortedByAscendingScore);
// // const names = sortedByAscendingScore.map(student => student.name);
// // console.log(names);
// const names = [...students].sort((firstStudent, secondStudent) =>  firstStudent.score - secondStudent.score).map(student => student.name    )
// console.log(names);
// const students = [
//     { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//     { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//     { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//     { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
//   ];
//   const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);