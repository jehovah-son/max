// alert('hello');
/*java script data type...
     numbers        */
//let age = 25;
let year = 1999;
//console.log(age,year)

//age = 30
//console.log(age);
/* cant over ride with const*/
const point = 100;
// console.log(point)
// END

//   strings
//  strings (we store strings in single qoute or double qoute '' " ")
// console.log('hello world')
//let email ='max@gmail.com'
//console.log(email)
// string concatanation(joining words together)
//let firstname ='max';
//let lastname = 'maxwell'
//let fullname = firstname + ' ' + lastname;
// console.log(fullname)
// // getting characters
// console.log(fullname[0])
// // string length
// console.log(fullname.length);
// strings method;

//let result = fullname.toLowerCase()
//console.log(result,fullname)

//let index = email.indexOf('@')
//console.log(index)

// END

// NUMBERS
let radius = 10;
const pi = 3.14;
// console.log(radius,pi)
// this we can do with number
// maths operatos +,-,/,* %
// console.log(10/2)

// order of operation - B I D M A S
// (bracket indices divison multiplication addision subtraction )
//let result = 5*(10-3)**2
//console.log(result)
//let likes = 10
//likes = likes + 1
//console.log(likes)

// END

// NAN(not a number)
//let likes = 20
//let result = 'the blog has ' +  likes  + ' likes';
//console.log(result)

//template strings
const title = "best reads of 2019";
const author = "mario";
const likes = "30";

// concatenation way
//let result = 'the blog called ' +  title  + ' by ' +  author  + ' has ' +  likes  + ' likes';
//console.log(result)

// END

// ARRAYS (store collection of strings or numbers)
//let ninja = ['max','maxwell']
//ninja[0] = 'ken' //(over ride max to another name)
//console.log(ninja[1])

// let ages =[ 1,2,3,4,5]
//console.log(ages)

//let random =['max','maxwell',1,2]
//console.log(random)

//console.log(ninja.length);
// ARRAY METHODS
//let result= ages.join('-')
//let result = ninja.indexOf('maxwell')
//let result = ninja.concat(['maxs','success'])
//console.log(result)

// END

// NULL/UNDEFINED
//let age=null;
//console.log(age, age + 3 , `the age is ${age}`)

//END

// booleans & comparisons
// console.log(true,false,"true","false")

// METHOD CAN RETURN BOOLEANS
//let email = 'maxgadget.com'
//let names=['max','maxwell']
//let result = email.includes('@')
//let result = names.includes('max')
//console.log(result)

// COMPARISON OPERATORS
//let age = 25

//.log(age == 25) //(is age equals to 25 (true))
//console.log(age == 30)//(is age equals to 30(false))
//console.log(age != 25)//((!)mean not eqaul to 25 )
//console.log(age >= 20)//(higher than 25(true))

// you can also do it for word string

// LOOSE COMPARISON (DIFFERENT TYPE CAN STILL BE EQUAL)

//console.log(age == 25);
//console.log(age == '25')//(even tho they are diifrent type they are equal)
//console.log(age != '25')

// strict comparison

// END

// TYPE CONVERSION
let score = "100";

//score = Number(score)
//console.log(score + 1);
//console.log(typeof score) //(it shows if the element is string or nyumber)

// END

// FOR LOOPS
//for(let i = 0; i < 5; i++){
//    console.log('in loop',i)
//}
//console.log('loop finished')

//const names = ['max', 'maxs' ,'maxwell']
//for(let i = 0;i <names.length; i++){
//    console.log(names[i])
//}

// END

// WHILE LOOP
//let i=0

//while( i <5){
//console.log('in loop',i)
//i++}
//let i=0

//while(i <names.length){
//    console.log(names[i])
//i++}

// END

// IF STATEMENT
//const age = 20;

//if(age > 20){
//console.log('you are over 20 years old');//(if the age is less than 20 it wont show cause it not true)
//}

//const ninja=['max', 'maxs', 'maxwell']
//if (ninja.length > 2 ){
//    console.log("that's alot of ninja")
//}

//const password='password'

//if (password.length >=8){
//    console.log('password is long enough!')
//}

// END

// ELSE IF STATEMENT OR // and AND &&
//const password='p@word'
//if (password.length >=12 && password.includes('@')){
//     console.log('that password is realy strong')
//}
//else if (password.length >=8 || password.includes('@')){
//  console.log('password is long enough!')
//} else{
//    console.log('password is not long enough!')
//}

// END

// LOGICAL NOT(!) it swith things false to true,true to false
//let user = false;
//if(!user){
//    console.log('user must be logged in to continue')
//}

// END

// SWITCH STATEMENTS
const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  default:
    console.log("not a valid grade");
}
// END
// VARIABLE & BLOCK SCOPE
//let age = 30;

if (true) {
}

// END

//  FUNCTION expression // ARGUMENT & PARAMETERS (wen we dont )
/*const speak = function(time ,name ){//(default argument word)
     console.log(`good ${time} ${name}`)
     
}

speak('night','max' );
speak('day', 'maxwell')*/

// function returning value
const calculate = function (radius) {
  let area = 3.14 * radius ** 2;
  // console.log(area)
  return area;
};
const area = calculate(5); //ya sayin the raduis to be 5
// console.log("the total radius of the circle is"  , area)

// lesson
const maxwell = function (a, b) {
  let avarage = (a + b) / 2;
  // console.log(avarage);
  return avarage;
};
let avarage = maxwell(7, 12);
// console.log("the point is " , avarage)

// another example
const address = function () {
  let street = "olufemi street";
  return street;
};
// METHODtoUppercase
let street = address().toUpperCase();
// console.log(street)

////////////////////
const max = function () {
  let name = "success";
  return name;
};
let result = max();
// console.log(result)

// CALLBACK & FOREACH METHOD ( GET A REFERENCE OT THE 'UL' TAG)
const ul = document.querySelector(".people");

const people = ["max", "maxs", "maxwell"];

let html = ``;

people.forEach(function (person) {
  // create html template
  html += `<li style=color:red">${person}</li>`;
});
 console.log(html);
ul.innerHTML = html;

// OBJECTS (OBJECT IN REAL LIFE HAve properties and things they can do..)
// object literal (we use {} to make an object literal)
let user = {
  /*(key value)*/ name: "max", //(value)
  age: 25,
  email: "maxgadget@gmail.com",
  location: "lagos",
  blog: ["why i rule", "i sell things"],
  //method ...tins it can do
  login: function () {
     console.log('the user logged in');
  },
};
const itemsObj = {
  name: ["Some guy"],
  quantity: 34,
  calc: function () {
    console.log(this);
  
  },
};

console.log(itemsObj.name)


// console.log(user)
// console.log(user.name)

user.age = 30; //(to over ride the age)
// console.log(user.age)

// console.log(typeof user)

//user.login();

//console.log(user.name)



//MATH OBJECT
// random numbers
/*const random = Math.random();
console.log(random);

console.log(Math.round(random * 50));


// DOCUMENT OBJECT MODEL (DOM)
const head = document.querySelector('h1');
console.log(head)

const header = document.querySelectorAll('h2')

console.log(header[3])

const brunch = document.querySelectorAll('.brunch')

console.log(brunch)

// GET AN ELEMENT BY ID
const main = document.getElementById('main')
console.log(main)

// GET ELEMEMNT BY THEIR CLASS NAME
const summer = document.getElementsByClassName('summer-bbq')
console.log(summer);

// GET ELEMENT BY THEIR TAG NAME
const para = document.getElementsByTagName('p')
console.log(para)
console.log(para[1])*/

// HOW TO OVERRIDE TEXT
/*const head= document.querySelector('h1')
console.log(head.innerText);
head.innerText = 'today is friday';*/

// to over ride or add to all H2 tags
const heads = document.querySelectorAll('h2')
heads.forEach(heads => {
  console.log(heads.innerText);
  heads.innerText +=' new text';
});

