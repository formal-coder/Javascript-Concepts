//  How Js Works
//  It is a compiled language --> means it first see all the text then it executes the whole code
// It is a synchronous language means when code is execute until the first line is executed then 2'nd line will not be executed

console.log(this);
console.log(window);
console.log(firstname);
var firstname = "Madhav";

//Compilation Phase  ---> it checks for any error and it determines which varible belong to which scope
// 1. Lexing --> it breaks the into small chunks of code called tokens
// 2. Parsing --> it parse the tokens into the form of parse tree
// 3. How code is  execute  -> In js the code is executed in execution context the first context is global execution context

// -------------         Global Execution Context   -------------------- > GEC is added in the stack

// -- 1. ____Creation phase of Global Execution Phase  --> value of this is set to window , value of variable is set to undefined when defined by var

// 2. _________Code Execution Phase  --->  here first we are print this means priting window object then it prints window object then it
// is priting undefined as the value of firstname is set undefined in compilation phase and on fourth line the value of firstname is
// set to Madhav

// What happens to function decleration ------>

// Hoisting ---> Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Hoisting allows functions to be safely used in code before they are declared. onlyhappens in function decleration
// when we call function expression which is been created with var before crearing it it gives undefined as it is treated as a vriable

// let and const hoisted --> when we call or try to access the variabe before creatig it with let or const it gives error(remains uninitialised)

//  ---------     Function Execution Context         --------------

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
  console.log(arguments); // its a property of functions gives array of arguments
  let myVar = "var inside func";
  console.log(myVar);
  const fullName = firstName + " " + lastName;
  return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName);

// in memory context phase --> this--> window , window , foo --> uninitialised , getfullname --> function , personName --> uninitialised
// execution in call stack  ---> value of foo is set to foo become initialised , prints foo , then function executaion context is created which is function execution context

// Function Execution Context -->
// __________ Local Memory Creation --> argument --> [firstname , lastname] , firstname -> harshit , lastname -> sharma , myVar --> uninitialised , fullname -> uninitialised
// _________ Code Execution --> in function getfullname == print arguments , let is initialised , log value of myvar , fullname -> initialised and set, return fullnam's value

//  ----------------     Scope Chain     ---------------------

// ____  Global Scope  -> variable defined outside func are in global scope , you can access that variable anywhere

// ____ Local Scope -> vraible defined inside func are in local scope , that vriable is not access outside the func , each func create it own funtion scope

// Note --> When we have a func3 in func2 which is in func1 if we decided to access any variable names name the in func3, first js will
// look in func3 then in func2 then in func1 and finaal yin global scope if can't find it returns undefined this is called scope chain
let name = "madhav";
function nothing() {
  //   var name = "madhav";
  console.log(name);
  console.log("func nothign ");
}
nothing();

//  ----------     Closures        ------------------
// Closure is "when you have a function defined inside of another function, that inner function has access to the variables and scope of the
//outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function."

//  Async vs Defer(best way) -- > Correct way of linking a js file

// async ===>  <script src='namke.css' async/> it is added at top but when the compiler comes to this line
// complier compiles the js file and html file simultaneoulsy but then when parsing of js file  finished then compiler
// then it start  to execute it wihtout parsing the complete html file resulting in errors sometime

// defer ==> <script src='namke.css' defer/> here browser started to parse the js and html file simultaneously
// but when both the file was completely parsed then the browser started to execute the js file

//     ----------------        DOM           ----------------

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);
// // const mainHeading = document.getElementById("main-heading");
// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);

// change text
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);

// change the styles of elements
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "20px solid green";

// get and set attrubutes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// innerHtML
const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"
// console.log(headline.innerHTML);
// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);

// sibling relation
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
// const container = document.querySelector(".container");
// console.log(container.children);
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove("container");
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");
const header = document.querySelector(".header");

// header.classList.add("bg-dark");
console.log(header.classList);
// Add new HTML elements to page

// innerHTML to add html element

//const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
//todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')

// document.createElement()
// append
// prepend
// remove
// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);
// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true); // deep cloning
// ul.append(li);
// ul.prepend(li2);

// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
// const ul = document.querySelector(".todo-list");

// new element
// const li = document.createElement("li");
// li.textContent = "new todo";

// const referenceNode = document.querySelector(".first-todo");

// ul.removeChild(referenceNode);

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");  // it gives all the live list

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);

// how to get the dimension of element
// height width
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);

// ---------          Intro to events    ------------------------------------
// click
// event add karne ke 3 tarike hai
// 1.)
//const btn = document.querySelector(".btn-headline");
// method --- addEventListener
// function clickMe(){
//     console.log("you clicked me !!!!!");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!!");
// });

// btn.addEventListener("click", ()=>{
//     console.log("arrow function !!!")
// });

//  this keyword
// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function () {
//   console.log("you clicked me !!!!");
//   console.log("value of this");
//   console.log(this);
// });

//  const allButtons = document.querySelectorAll(".my-buttons button")
//  for(let button of allButtons){
//      button.addEventListener("click", function(){
//          console.log(this);
//      })
//  }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this);
//         });
// })

//  ----   event object  -----------

//  const firstButton = document.querySelector("#one");

//  firstButton.addEventListener("click", function(event){
//    console.log(event);
//  })

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine --- line by line execute karta hai

//  browser ---- js Engine + extra features
//  browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ----- 2
// 1.) callback function hai vo js Engine ko degi ......
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi

// const allButtons = document.querySelectorAll(".my-buttons button");

// for (let button of allButtons) {
//   button.addEventListener("click", (e) => {
//     console.log(e.currentTarget);
//   });
// }

// console.log("script start !!!!!");
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     let num = 0;
//     for (let i = 0; i <= 1000000000; i++) {
//       num += i;
//     }
//     console.log(e.currentTarget.textContent, num);
//   });
// });

// let outerVar = 0;
// for (let i = 0; i <= 100000000; i++) {
//   outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!");

// // little practice with click event
// const allButtons = document.querySelectorAll(".my-buttons button");
// // console.log(allButtons.length);

// allButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     // console.log(e.target);
//     e.target.style.backgroundColor = "yellow";
//     e.target.style.color = "#333";
//   });
// });

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// function randomColorGenerator() {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const randomColor = `rgb(${red}, ${green}, ${blue})`;
//   return randomColor;
// }

// mainButton.addEventListener("click", () => {
//   const randomColor = randomColorGenerator();
//   body.style.backgroundColor = randomColor;
//   currentColor.textContent = randomColor;
// });

// // keypress event
// // mouseover event
// // const body = document.body;

// // body.addEventListener("keypress", (e) => {
// //   console.log(e.key);
// // });
// // const mainButton = document.querySelector(".btn-headline");
// // console.log(mainButton);
// // mainButton.addEventListener("mouseover", () => {
// //   console.log("mouseover event ocurred!!!");
// // });

// // mainButton.addEventListener("mouseleave", () => {
// //   console.log("mouseleave event ocurred!!!");
// // });

// // console.log("hello world");

// const grandparent = document.querySelector(".grandparent");
// // const parent = document.querySelector(".parent");
// // const child = document.querySelector(".child");

// // capturing events
// // child.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! child");
// //   },
// //   true
// // );
// // parent.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! parent");
// //   },
// //   true
// // );
// // grandparent.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! grandparent");
// //   },
// //   true
// // );
// // document.body.addEventListener(
// //   "click",
// //   () => {
// //     console.log("capture !!!! document.body");
// //   },
// //   true
// // );

// ///// not capture

// // child.addEventListener("click", () => {
// //   console.log("bubble child");
// // });
// // parent.addEventListener("click", () => {
// //   console.log("bubble parent");
// // });
// // grandparent.addEventListener("click", () => {
// //   console.log("bubble grandparent");
// // });
// // document.body.addEventListener("click", () => {
// //   console.log("bubble document.body");
// // });

// // event delegation
// // grandparent.addEventListener("click", (e) => {
// //   console.log(e.target);
// // });

// const todoForm = document.querySelector(".form-todo");
// const todoInput = document.querySelector(".form-todo input[type='text']");
// const todoList = document.querySelector(".todo-list");

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newTodoText = todoInput.value;
//   const newLi = document.createElement("li");
//   const newLiInnerHtml = `
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`;
//   newLi.innerHTML = newLiInnerHtml;
//   todoList.append(newLi);
//   todoInput.value = "";
// });

// todoList.addEventListener("click", (e) => {
//   // check if user clicked on done button
//   if (e.target.classList.contains("remove")) {
//     const targetedLi = e.target.parentNode.parentNode;
//     targetedLi.remove();
//   }
//   if (e.target.classList.contains("done")) {
//     const liSpan = e.target.parentNode.previousElementSibling;
//     liSpan.style.textDecoration = "line-through";
//   }
// });
