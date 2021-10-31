import { quotes } from './quotes.js';

const qoute = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button")
let counter = 0;
let limit = null;

window.addEventListener("load", () => {
  init();
});

function init() {
  displayQuote(counter);
  limit = quotes.length - 1;
}

function displayQuote(index) {
  qoute.innerText = quotes[index].quote;
  author.innerText = quotes[index].author;
}

button.addEventListener("click", () => {
  counter += 1;
  console.log(limit);
  if (counter <= limit) {
    displayQuote(counter);
  } else {
    counter = 0;
    displayQuote(counter);
  }
});

