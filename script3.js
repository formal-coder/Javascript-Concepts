"use strict";

// -------     settimeout        ------------ ---> it is asynchorous built in function

console.log("script start");

const id = setTimeout(() => {
  // this runs when passed time is passed settimeout(function,time (in millisecond))
  console.log("settimeout");
}, 4000); // here 4 sec is minimum time not exact

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
console.log("scipt end ");

clearTimeout(id); // it delete the function from the browser api and does not run it

//  --------   setinterval   ------------------ >> asynchronous function

console.log("script start setinterval");

const ifset = setInterval(() => {
  console.log(Math.random());
}, 2500);
console.log("script end setinterval");

clearInterval(ifset);

// ---------     callbacks      -----------------

const func2 = function (num1, num2, callback) {
  console.log("func2 run");
  console.log(num1, num2);
  callback();
};

const callback = function () {
  console.log("func1 run");
};

func2(1, 2, callback); // passed func as a argument

//    -------     Promise    --------------

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({ value: "Fried Rice" });
  } else {
    reject({ msg: "Could Not Make Fried Rice" });
  }
});

friedRicePromise
  .then(({ value }) => {
    console.log(`Lets Eat ${value}`);
    return { name: "Madhav" }; // if i didn't return any value it return undefined
  })
  .then(({ name }) => {
    console.log("Your name is ", name);
  })
  .catch(({ msg }) => {
    console.log(msg);
  });

// Promsie.resolve

const newPromise = Promise.resolve("Madhav"); // it gives a new promise with the value of madhva

newPromise.then((name) => {
  console.log(name);
});

// then method always returns a new promsie

// BASIC THEORY  ---->

// =----  AJAX ---: asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques using many web technologies on the "client-side to create asynchronous web applications.

// With Ajax, web applications can send and retrieve  data from a server asynchronously (in the background)
// without interfering with the display and behaviour of the existing page

// We don't use data in XML format anymore  we use JSON now.

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)

const url = `https://jsonplaceholder.typicode.com/posts`;
const xhr = new XMLHttpRequest();

// 1.
xhr.open("GET", url); // before it ready state is o after open it is 1

// 2/
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
  } else {
    console.log("State is not ready ");
  }
};

xhr.onload = function () {
  // onload runs when ready state is 4
  console.log(xhr.readyState);
};

xhr.send();

// -------    XHR using promises     ----------

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Something went wrong"));
    };

    xhr.send();
  });
}

// sendRequest("GET", URL)
//   .then((response) => {
//     const data = JSON.parse(response);
//     console.log(data);
//     return data;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch

fetch(url)
  .then((res) => {
    return res.json(); // parse
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//  async await

const fetchData = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log("Here is the Data", data);
};

fetchData(url);
