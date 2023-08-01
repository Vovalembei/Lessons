const message= 'Mango' + 'is' + 'gay'
console.log(message);
console.log(3 + '14' + '15');
//==============================
const guestName = "Манго";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting);
console.log(`welcome ${guestName} your room number is ${roomNumber} !`);
//======================================================================
const message2 = "Welcome to Bahamas!";
console.log(message2.length); // 19
console.log("There is nothing impossible to him who will try".length);
//====================================================================
const message3 = "Welcome to Bahamas!";
console.log(message3.toLowerCase()); // "welcome to bahamas!"
console.log(message3.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message3);
//======================================================================
const message4 = "Welcome to Bahamas!";
console.log(message4.indexOf("to")); // 8
console.log(message4.indexOf("hello")); // -1
//================================================
const productName = "Ремонтний дроїд";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false
//=============================================================
const filename = 'script.js'
console.log(filename.endsWith('.js'));
//===================================================
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace("script", "index");
console.log(minifiedJsFileName)
const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames);
//===============================================================
const productName1 = 'coca cola'
console.log(productName1.slice(3,5))
//===============================================================
const ageA = 16
const ageB = 24
if (ageA > 30 || ageB < 96) {  
    console.log('condition is true!');
} else {
    console.log('condition is false!');
}
if (ageA > 30 && ageB < 96) {  
    console.log('condition is true!');
} else {
    console.log('condition is false!');
}
if (!ageA < 7) {  
    console.log('condition is true!');
} else {
    console.log('condition is false!');
}
//====================================================================
let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost);
//=====================================================================
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type);
const age = 20
const type = age >=18? 'adult' : 'child'
console.log(type);
//========================================================================
let cost1
const subscription1 = 'premium'
switch (subscription1) {
    case 'free':
        cost1 = 0
        break
    case 'pro':
        cost1 = 50
        break
    case 'premium':
        cost1 = 100
        break
    default:
        break
}
console.log(cost1);