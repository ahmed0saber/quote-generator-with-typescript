"use strict";
const generateQuoteBtn = document.querySelector(".generate-quote-btn");
const quoteContent = document.querySelector(".content");
const quoteAuthor = document.querySelector(".author");
generateQuoteBtn === null || generateQuoteBtn === void 0 ? void 0 : generateQuoteBtn.addEventListener("click", generateQuote);
generateQuote();
function generateQuote() {
    const apiUrl = "https://api.quotable.io/random";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        displayQuote(data);
    });
}
function displayQuote(quoteDate) {
    if ((quoteContent === null || quoteContent === void 0 ? void 0 : quoteContent.textContent) != null) {
        quoteContent.textContent = quoteDate.content;
    }
    if ((quoteAuthor === null || quoteAuthor === void 0 ? void 0 : quoteAuthor.textContent) != null) {
        quoteAuthor.textContent = quoteDate.author;
    }
}
