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
const copyQuoteBtn = document.querySelector(".copy-quote-btn");
copyQuoteBtn === null || copyQuoteBtn === void 0 ? void 0 : copyQuoteBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteContent === null || quoteContent === void 0 ? void 0 : quoteContent.textContent} - Quote by ${quoteAuthor === null || quoteAuthor === void 0 ? void 0 : quoteAuthor.textContent}` || "");
    alert("Quote has been copied to clipboard successfully!");
});
