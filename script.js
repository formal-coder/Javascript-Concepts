// Here I am Gonna to Learn And Practise Javascript , I can In The Future And Come Here and Read the code and
// IT  Will contain almost  everything

"use strict"; // It indicates js to go to the strict mode

console.log("Hello Suckers"); // It prints some thing into the console of the browser

// ----  Variables ------

var isDriving = false; // 1 -->
let name = "Madhav Gupta"; //
const age = 14; // it declare constant , we cannot change it value once declared

//  -----  String   --------
let Myname = "Madhav"; // string indexcing
//012345 from left to right
//-6-5-4-3-2-1  right to left

// String Methods ---->
console.log(Myname.length); // Gives the length of of the string variable and also array
let nametrim = Myname.trim(); // returns a new string with removed spaces
let nameUpper = Myname.toUpperCase(); // returns a new string with all uppercase letters
let nameLower = Myname.toLowerCase(); // returns a string with lowercase letters
let nameSlice = Myname.slice(0, 4); // returns a new string with a slice in an string with specified values
console.log(Myname.concat(name)); // add the two variables string
console.log(Myname.match(/dh/g)); // used to searches a string for a match against expression and returns the matches as Array.
let nameArray = name.split(); // retuns a array with each letters an an item of array
console.log(name.replaceAll("a", " ")); // replaces a specified expression with the given value
console.log(typeof Myname); // tells the type of a varibale
console.log(Myname.search("av")); // returns the index of the first letter of the expresiion which value is given
console.log(name.includes(" ")); // returns bool depends upon if the expression include specified value or not
// console.log(name.startswith("Madhav")); // returns a bool depending upon the value endswith() is also same but it checks ends
// console.log(name.indexof("Gupta")); // returns the position of the first occurrence of a specified value in a string If the value not found, returns -1.

console.log(`Hello Guys My Name is ${name}`); // Template String

// ---- Primitive Data Types

let name4 = "Jhalak"; // string
let num3 = 13; // integer
let age1 = undefined; // means it is not defined means it does not have any value
let city = null; // means it is defined but its value is  null (nothing)
let isDriking = false; // boolean true or false
let biginteger = BigInt(num3); // it convert int into bigint as int cannot store very big value

// Comparison Operator -->
let num1 = 1;
let num2 = 7;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// == vs ===
let num5 = 10;
let num6 = "10";
console.log(num5 == num6); // == only checks value but does not checks data types
console.log(num5 === num6); // === checks value as well as data type

// Falsey Values -- > null , undefined , false , 0 , "" ,NaN (Not a Number )
// Truhty Values -- > all values except falsey values

// Conditional Statements -->

// if else Statement
if (num5 > 11) {
  // console.log("It is a bigger Number ");
} else if (num5 == 11) {
  // console.log("It is 11");
} else {
  // console.log("It is a smaller Number ");
}

// ternary operator -->
let Myage = 16;
Myage > 18 // it will have a condition
  ? console.log("Eligible for driving ") // if condition is true
  : console.log("Not Eligible for driving "); // if condition is false

// and operator -->
if (Myage > 18 && typeof Myage === int) {
  console.log("Congrats eliiigble for driving ");
}

// or operator -->
if (Myage > 18 || Myage === 18) {
  console.log("Congrats Now You are also eligble for drivng ");
}

//  Switch Statement -->
// let day = parseInt(prompt("ENter The Day Number "));
let day = 5;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

// While Loops
let i = 0;
while (i < 5) {
  console.log(`I is smaller than 5 and it is ${i} `);
  i++;
}

//  A simple program demostrating use of while loops  and if else statememts
// let nameUser = prompt("ENter Your name : ");
// let ageUSer = parseInt(prompt("Enter Your Age : "));
// let winningNumber = Math.round(Math.random() * ageUSer + nameUser.length);
// console.log(winningNumber);
// let guess = 0;
// let guessNumber = parseInt(prompt("Guess a Number : "));
let guessNumber = 1;
let winningNumber = 1;

while (guessNumber !== winningNumber) {
  if (guessNumber < winningNumber) {
    alert("Guess a Number Little Bit Higher ");
    guessNumber = parseInt(prompt("Guess a Number : "));
  }
  if (guessNumber === winningNumber) {
    alert("Congrats You Guessed The Number Right ");
    break;
  } else {
    alert("Guess a Number Little Bit Lower ");
    guessNumber = parseInt(prompt("Guess a Number : "));
  }
}

//  do while loops --->
let result = "";
let n = 0;
do {
  n = n + 1;
  result = result + n;
} while (n < 5);

//  for loops -->
for (let i = 0; i < 12; i++) {
  if (i === 3) {
    continue; // here continues skips the execution of that expression if the condition met
    console.log("see the execution is now skipped of this line ");
  } else if (i === 5) {
    break; // break keyword simply breaks out of the loop if the condition is met
  } else {
    console.log(i);
  }
}

//  ------------------   ARRAYS ----------------

const names = ["madhav", "aditya", "divyansh", true, 54, null]; // --- array

console.log(Array.isArray(names)); // tell if variable  is array or not
names.push("vanshika"); // add elemenst at the end of array
names.pop(); // remove the last element of the array it also return the papped element
names.shift(); // it removes the element from start
names.unshift("madhu"); // it add element to the start of array
let copyNames = names.slice(); // it slices the part of the array to it store into new array variable
let newArrayNames = names.concat(["vanshika"]); // add two arrays

// Spread Operator --> it destructuring of the array
let myInfoArray = ["madhav", 12, "Sanfort World School "];
let [nameMadhav, ageMadhav, schoolMadhav] = [...myInfoArray]; // that how spread operator can be used
const newArray1 = [...myInfoArray, ...names, 89, 69];
const newArray2 = [..."123456789"];

// Primitive data type (string , int is primitive ) -->
let number1 = 10; // primitive type
let number2 = number1;
console.log(number1, number2);
number1++;
console.log(number1, number2); // is does not change the value of number2

// Reference data type -->
let numbersArray1 = [1, 2, 3, 4];
let numbersArray2 = numbersArray1;
console.log(numbersArray1, numbersArray2);
numbersArray1.push(8);
console.log(numbersArray1, numbersArray2); // here the value of numberarray2 also changes with change in numberarray1

// for loops in array -->
const friendNames = ["aditya", "divyansh", "madhulika", "jatin", "jhalak"];
for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

// while loops in array
let x = 0;
while (x < friendNames.length) {
  console.log(friendNames[x]);
  x++;
}

// for of loop array --->
for (let name of friendNames) {
  // name variable is equal to the each element of the friendNames array means first name = aditya , then name = divyansh and so on
  console.log(name);
}

// for in loops arrat -->
for (let index in friendNames) {
  // here in for in loop it returns the index of the element one by one whereas in for of loop it returns the value of the element
  console.log(friendNames[index]);
}

// destructing of array -->
let [aditya, divyansh, ...otherfriends] = [...friendNames]; // here first i stored the first element value which is aditya in the variable
// aditya then divaynch as that of second element and then remaining element will be stored in the array otherfriends , as when it put three
// dots right hand side of the equal sign it destructures it but when three dot is put left hand side of the equal sign it combies all
// the elements into the single array

//   ----------------------   OBJECTS   --------------------------

// Object Declare  -->
// objects reference type
// objects store key value pairs
// objects don't have index

const myInfo = {
  name: "Madhav Gupta", // name is key : Madhav Gupta is value
  age: 17,
  isinColege: false,
  country: "India",
  hobbies: ["coding", "music", "chess", "football", "badminton"],
  isEligibleDriving: function () {
    if (this.age >= 18) {
      console.log("Yes Eligible For Driving");
    } else {
      console.log("No Not Eligible for driving ");
    }
  },
};

console.log(myInfo.hobbies); // access the hobbies property on an object
console.log(myInfo["hobbies"]); // access the hobbies property on an object (ther method)

myInfo["city"] = "Moradabad"; // add key value pair in the object

// Difference between bracket and dot notation -->
// Here in bracket notation i can also put an expression  means i can put some coding over there but it is not possible in dot notation

// let askInput = prompt("ENter key : ");
// console.log(myInfo.askInput); // here it gives undefined
// console.log(myInfo[askInput]); // here it gaves the value of the property

// Iterating Objects -->

//1 Method -->
for (let key in myInfo) {
  console.log(key);
}

// 2 Method -->
for (let [key, value] of Object.entries(myInfo)) {
  // Object.keys for iterating keys , Object.values for iterating values and Object.entries() for iterating both keys and values
  console.log(key, ":", value);
}

// Spread Operator in Objects -->

const newObject1 = { ...myInfo, key69: "value69" };
const newObject2 = { ...["item1", "item2"] }; // when we use a spread operator on the array to make it a new object them index of the
const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" }; //array will be its key and element wiil be its value
console.log(newObject2);

// Object Destructuring --->
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band; // you have to declare the variable which is equal to the exact name of the key
console.log(bandName);
console.log(restProps);

// objects inside array
const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];
for (let user of users) {
  console.log(user);
}

// nested destructuring
const usersObject = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [{ firstName: firstNameObj1, gender: genderObj1 }, userObj2, userObj3] = [
  ...usersObject,
]; // i have declare genderObj1 as the variable in which the
console.log(genderObj1); //value of the key gender is equal to the genderObj1 variable

//   ----------------------------         Functions  ------------------------------

// Function Declaration
function calcAge(birthYear) {
  // here birthYear is parameter
  // we have this keyword in function declaeration and expression but  not in arrow function

  if (birthYear > 0) {
    console.log(`Your Age is ${2022 - birthYear}`);
  } else {
    console.log("Please Enter Valid BirthYear");
  }
}

calcAge(2005); // 2005 is argument

// Function Expression
const findTarget = function (array = [1], target = 1) {
  // target is equal to 1 which is a default parameter
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
};
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 7);
console.log(ans);

// Arrow Functions ---> they did not have their own this keyword , it's this keyword is poiting to window
const singHappyBirthday = (name) => {
  console.log("happy birthday to you ......", name); // in arrow function we does not  have this keyword
};

// Hoisting --> means we can access and call the function decleeration even before it is made

// Function Inside Function --->

const app = () => {
  const myfunc = () => {
    console.log("my function");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  myfunc();
  const number = addTwo(1, 2);
  console.log(number);
  console.log("we are in inside app");
};

app();

// Lexical Scope -->           It MEans that scope where fucntion is been defined

// The place an item got invoked (or called) is not necessarily the item's lexical scope.
//Instead, an item's definition space is its lexical scope.

const myVar = "value1";

function myApp() {
  // const myVar = 15;
  function myFunc() {
    const myVar = "value59";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    myFunc2();
  }

  console.log(myVar);
  myFunc();
}
// Here when we are using some variable first js will look the variable in the scope where it is defined and then it gonna
//  to move higher and higher scope in order to  find  the variable
myApp();

//  Block Scope and Function Scope ------------>

// let and const are block scope
// var is function scope

// It MEans that we cannot access the block scope element outside their scope

const myName = "Madhav"; // here myName is global scope , it can be access from anywhere
const sampleFunc = () => {
  let myName = "Vasudev"; // here nyName is block scope , its scope is only inside function and function defined inside it
  console.log(myName);
};
console.log(myName);
sampleFunc();

// Rest Parameters --------->

// here ...numbers is a rest parameter means  all argument given all the values given will be
// push into the variable numbers  as which acts like an array
function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}
const answer = addAll(4, 5, 4, 2, 10);
console.log(answer);

// param destructuring -------->
const anyPerson = {
  name: "Madhav Gupta",
  gender: "Male",
};

const printDetails = function ({
  name: personName,
  gender: personGender,
  ...otherprops
}) {
  console.log(personName);
  console.log(personGender);
  console.log(otherprops);
};

printDetails(anyPerson);

//  Callback Functions -------> a Function that is passed a parameter to another function and called inside that function in called callback function
// Or Is can be said that a function called inside a function when that functionis called because  some conditions happen
const func1 = function () {
  console.log("Func 1 is been called ");
};

function func2(age) {
  if (age >= 18) {
    console.log("You are equal or above 18");
    func1();
  } else {
    console.log("YOu are below 18");
  }
}

func2(889);

//  function returning function --->

// Higner order functions are those function which returns some function
const function1 = function () {
  console.log("Function 1 is been called ");
  return func1;
};

const returnedfunc = function1(); // the func1 is been stoted into the variable returnedfunc
returnedfunc();

//   --------------------------               Arrays Methods               -------------------------------------
const samplearr1 = [
  "madhav",
  "aditya",
  "divynash",
  "jatin",
  "jhalak",
  "madhulika",
];

const samplearr2 = [12, 42, 42, -322, 322.22, -222, 2783];

// forEach Method -->  execute some task on each and every element as its name says foreach
samplearr2.forEach((element, index) => {
  // here it does'nt return any new array
  element++; // here i add 1 to each element and print it
  console.log(`${index} : ${element}`);
});

//  map method --->
const samplearr3 = samplearr2.map((element, index) => {
  // this function always return a new array with modified elements
  return element + index;
});
console.log(samplearr3);

// filter method  ---->
const filterarray = samplearr2.filter((element, index) => {
  return element >= 0; // it only add from element to the filterarray which are larger than 0
});
console.log(filterarray);

//reduce method -->
const samplearr4 = [1, 2, 3, 4, 5, 10];

const reducevalue = samplearr4.reduce((accumelator, currentvalue) => {
  return accumelator + currentvalue;
});
const numbers = [1, 2, 3, 4, 5, 10];

// accumulator , currentValue,  return
// 1               2              3
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25

console.log(reducevalue);

const usercart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalpriceusercart = usercart.reduce((accumelator, currentvalue) => {
  return accumelator + currentvalue.price;
}, 0); // we are first define that accumelator 's value is 0 at first
console.log(totalpriceusercart);

//  Sort Method      ----->
// It simple sorts the array
// it medifies the original array
samplearr2.sort();

// Find Method  ----->
const findValue = samplearr2.find((element, index) => {
  return element > 100; // this method return the first element which satisfies the condition
});

console.log(findValue);

//  Aonther Example of find method
const usersCart = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];

const myUser = usersCart.find((user) => user.userId === 3);
console.log(myUser);

// every method --> this method returns true if each and every element of the array  satisfies a partcular condiitoon otherwise it will rteurn false
const everyMethodValue = samplearr1.every((element) => {
  return element.length >= 2;
});

console.log(everyMethodValue);

//  some Method   ------> this method returns true of only one element satisfies the given contiotion in the given array if none of the element satisfies the condiiton it will then return false
const someMethodValue = samplearr1.some((element) => {
  return element.length >= 2;
});

console.log(someMethodValue);

//  fill Method  -----.> It will a array with a one element array.find(value,start,end)
const fillarray = [1, 2, 3, 4, 5, 6];
fillarray.fill(2, 2, 5); // it modifes original array
console.log(fillarray);

// splice method ---->  array.splice(start,removecount)
// This method modifies the original array and returns the removed elements as a new array.
const itemsSamplearray = [
  "item1",
  "item2",
  "itemn3",
  "item4",
  "item5",
  "item6",
  "item7",
];

//  remove elements
itemsSamplearray.splice(2, 1);
console.log(itemsSamplearray);
// remove and add elements
itemsSamplearray.splice(4, 1, "item8");
console.log(itemsSamplearray);
//  only add element
itemsSamplearray.splice(2, 0, "item9");

// ieterables --> those data types in which we can applied for-of loops like arrays , strings

// array like object -->
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string , array

//   ------------              Sets        --------------------------------------

// They iterable
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const set1 = new Set([1, 2]);
console.log(set1);

set1.add(1); // add elements to the set
set1.add("madhav");
set1.add(true);
console.log(set1);
set1.delete(1); // delete element from the set
set1.has(true); // return true if element is present otherwise return false
console.log(set1.size); // return the length of the set

for (let ele of set1) {
  console.log(ele);
}

//   -------- ----------------      Maps           ---------------------------------

// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// Difference between maps and objects -->
// objects can only have string or symbol as key in maps you can use anything as key like array, number, string

const personMap = new Map();

personMap.set("firstname", "Madhav Gupta"); // set methods lets you to add key , value pair
personMap.set(["hobbies", "age", "gender"], {
  hobbies: ["chess", "coding", "badminton"],
  age: 16,
  gender: "Male",
});
personMap.set("country", "India");

console.log(personMap.get("country")); // returns the value of the key

for (let key of personMap.keys()) {
  // returns key of the map
  console.log(key);
}

for (let [key, value] of personMap) {
  console.log(key, value);
}

console.log(personMap);

// clone using object.assign
const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.assign({}, obj1); // it will now only clone the current obj1 and afterward if i done some change in obj1 it will not have any obj2

// Optional Chaning   ------->

const user = {
  firstName: "harshit",
  // address: { houseNumber: "1234" },
};
console.log(user.address?.houseNumber); // it first check if the property is there or not if not then it simply gives undefined and does not proceed further

//  Methods   =  Function Inside Objects ----->

const greetPerson = function () {
  console.log(`Welcome ${this.firstName} to This fucking world of tech `); // this keyword points to the object which is calling this func
};
const person1 = {
  firstName: "harsh",
  age: 8,
  about: greetPerson,
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: greetPerson,
};

// This Keyword ---> This keyword always points out to the object which is calling the function
console.log(this); // logs window as window is calling the function console.log

//  Call , bind , apply Methods

function about1(hobby, favMusician) {
  console.log(this.firstName, this.age);
}

function about2(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
  firstName: "harshit",
  age: 8,
  about1: about1,
  about2: about2,
};
const user2 = {
  firstName: "mohit",
  age: 9,
};
user1.about1(); // here about function is simply called in user1 function

//  Call Methods -->

// But what if i want to call the about func in user2 i have to use call method
user1.about2.call(user2, "coding", "arjit singh"); // here i called the user1.about method but tell that calls the about method through call method that here
// this keyword is user2

//  Apply Method -->
about2.apply(user1, ["guitar", "bach"]); // here i call the adbout2 function with apply method it is same as call method my here params are passed in a list

// Bind Method --->
const func = about2.bind(user2, "guitar", "bach"); // it is same as call but  does not call a fucntion it retuns a func with the specified this keywords and params
func();

// Object.create ---- >
// here object.create method sets the __proto__ property to any as a reference of the object mentioned
const obj5 = {
  key1: "value1",
  key2: "value2",
};

const obj6 = Object.create(obj5); // Object.create() method creates a new object using the prototype of the given object.
obj6.key3 = "value3";
console.log(obj6.__proto__);

// Prototype --- >

function helloWorld() {
  console.log("hello world");
}
// in js function are function as well as objects
helloWorld.myProperty = "This is my property";
console.log(helloWorld.myProperty); // see how func is now behaving like a function

// function provides more usefull empty object such as prototype property

console.log(helloWorld); // prototype is a object which is given to add us key value pair in it
// only func provie prototype property

helloWorld.prototype.abcproperty = "abc"; // adding key-value pair in prototype
helloWorld.prototype.sing = function () {
  return "lalalla";
};

// use of prototype
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // here we are stting the .__proto__ property of user as createUser.prototype
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la ";
};

const user5 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  18,
  "my address"
);
const user6 = createUser(
  "harsh",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);

console.log(user5);
console.log(user5.is18());

//  New Keyword     ------>
// new keyword
// 1.) this = {}
// 2.) return {}
//

//New keyword in JavaScript is used to create an instance of an object that has a constructor function.
// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.

//  ------------------                Class          -------------------------------

// class are fake they are simply objects in js

class Person {
  constructor(name, country, age, gender) {
    this.name = name;
    this.country = country;
    this.age = age;
    this.gender = gender;
  }

  about() {
    console.log(
      `Your Name is ${this.name} and i am ${this.age} years old and i am a ${this.gender} living in ${this.country}`
    );
  }
  isDriving() {
    if (this.age >= 18) {
      console.log("Eligible for driving");
    } else {
      console.log("Not eligible for driving ");
    }
  }
}

const Madhav = new Person("Madhav", "India", 16, "Male");
Madhav.about();
console.log(Madhav.name);
Madhav.isDriving();
console.log(Object.getPrototypeOf(Madhav)); // to see the prototype object of the Instance of Person which is madhav

class Indian extends Person {
  constructor(name, country, age, gender, city) {
    super(name, country, age, gender);
    this.city = city;
  }

  aboutcity() {
    console.log(`Lives in ${this.city} in country ${this.country}`);
  }

  get _age() {
    // this is getter method
    return `The age is ${this.age}`;
  }

  set _age(newage) {
    // this is a setter method
    this.age = newage;
  }

  static classInfo() {
    // these static methods can only be called by class itself not by the instance   of it
    return "this is Indian person class ";
  }
}

const Ram = new Indian("Ram", "India", undefined, "Male", "Moradabad");
Ram.aboutcity();
console.log(Ram.__proto__ == Indian.prototype); // here it gives true because with the help of new keyword we set the __proto__ of Ram to the prototype of Indian
Ram.about(); // ram have also access to the properties of the Person class
console.log(Ram._age);
Ram._age = 1000;
console.log(Ram._age);
console.log(Indian.classInfo());
