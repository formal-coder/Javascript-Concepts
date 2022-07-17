"use strict";

//Write a function that accepts an array of strings. Return the longest string.

const arraysOfWords = ["hey", "i", "am", "madhav", "gupta"];

const longestWordinArray = function (array) {
  const length = array.map((ele) => {
    return ele.length;
  });

  console.log(length);

  const largestNum = Math.max(...length);

  const largestElement = array.find((ele) => {
    return ele.length === largestNum;
  });

  console.log(`The Longest String is ${largestElement}`);
};

// longestWordinArray(arraysOfWords);

//  Write a function that takes a string, and returns the character that is most commonly used in the string.

const mostCharUsedSTring = function (string) {
  const trimmedString = string.replaceAll(/\s/g, "");

  const lettersArray = trimmedString.split("");
};

mostCharUsedSTring("ma   dhav"); // just  not getting the answer

// Create a function that takes in two strings as two parameters and returns a boolean that
//indicates whether or not the first string is an anagram of the second string.

const checkAnagram = function (string1, string2) {
  const trimstring1 = string1.replaceAll(/\s/g, "");
  const trimstring2 = string2.replaceAll(/\s/g, "");

  const string1Array = trimstring1.split("");
  const string2Array = trimstring2.split("");

  const ans = string1Array.every((letter) => {
    return letter in string2Array;
  });

  console.log(ans);
};

checkAnagram("hey", "hey");
