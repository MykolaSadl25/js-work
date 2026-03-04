// Function declaration

// function message(text){
//     return`Hello ${text}`;
// }

// console.log(message("Mykola"));
// console.log(message("Maksim"));


// function adding(number1,number2){
//     return number1 + number2;
// }
// console.log(adding(51031,1305));
// console.log(adding(531,1305));
// console.log(adding(511,135));

// console.log(adding(50,-12,156));

// function expression

// const calcLength = function (array){
//     return array.length;
// }
// console.log(calcLength([1,2,3,4,5,6,7,8,9,132,3589,469,84612,5]));
// console.log(calcLength(["Rolinod","Maximus3000","BanRop15","Kumasik"]));

// function added(a = 1,b = 1,c = 1){
//     return a + b + c;
// }
// console.log(added(7,4,3));

//Напиши функцію яка повертає найбільше число в масиві:
let array = [1,221,323,26,4.2, 3, 2, 5, 4];

function maxNumber(a){
    let max = a[0];
    for(const num of a){
        if (num > max) {
            max = num
        }
    }
    return max;
}
console.log(maxNumber(array));
let arr = [56,123,132,6542,654162,479841,321];
console.log(maxNumber(arr));

//Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
//Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
//Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає   укорочену версію.

function formatString(string){
    console.log(string.length);
    if (string.length <= 40) {
        return string;
    }
    else {
        const cut = string.slice(0,40)+"..."
       return cut;
        
    }
}
console.log(formatString("Yo, if I could do it, then why can't you? (Why?) Huh, get up and make it work Ain't no way that I'm sitting around, its now or never, Im picking it first "));
console.log(formatString("You can't tell me that I won't make it, knew that I had this gift since birth (I knew)"));
console.log(formatString("Grinding, came out the mud like Roddy, I had nobody, I came from dirt"));
