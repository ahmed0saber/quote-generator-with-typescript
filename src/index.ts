type Quote = {
    author: string
    authorSlug: string
    content: string
    dateAdded: string
    dateModified: string
    length: number
    tags: string[]
    _id: string
}

const generateQuoteBtn = document.querySelector<HTMLButtonElement>(".generate-quote-btn")
const quoteContent = document.querySelector<HTMLParagraphElement>(".content")
const quoteAuthor = document.querySelector<HTMLSpanElement>(".author")

generateQuoteBtn?.addEventListener("click", generateQuote)
generateQuote()

function generateQuote(): void{
    const apiUrl = "https://api.quotable.io/random"
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayQuote(data)
    })
}

function displayQuote(quoteDate: Quote): void{
    if(quoteContent?.textContent != null){
        quoteContent.textContent = quoteDate.content
    }
    if(quoteAuthor?.textContent != null){
        quoteAuthor.textContent = quoteDate.author
    }
}