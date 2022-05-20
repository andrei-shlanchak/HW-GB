// HW - 1 //
let celsius = 18;
let fahrenheit = (9 / 5) * celsius + 32;
console.log(fahrenheit);
// ------------------------//


// HW-2 //
const name = 'Василий';
const admin = name
console.log(admin);
// ------------------------//




let num = 10 + 10 + "10"; // comparing number and string (Concatenating strings)
let num2 = 10 + "10" + 10; // comparing number and string than number
let num3 = 10 + 10 + +"10";// comparing number and string (Concatenating strings)
let num4 =  10 / -""; // number is compared to null
let num5 = 10 / +"2,5"; // NaN
console.log(num, num2, num3, num4, num5);