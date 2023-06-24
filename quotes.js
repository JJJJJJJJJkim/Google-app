const quotes = [
    {
        quote : "I'm not here to be perfect, I'm here to be real.",
        author : "Lady Gaga",
    },
    {
        quote : "I'm not interested in money. I just want to be wonderful.",
        author : "Marilyn Monroe",
    },
    {
        quote : "The only thing that feels better than winning is winning when nobody thought you could.",
        author : "Hank Aaron",
    },
    {
        quote : "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author : "Winston Churchill",
    },
    {
        quote : "If you can dream it, you can do it." ,
        author : "Walt Disney",
    },
    {
        quote : "If you want something done, ask a busy person to do it.",
        author : "Laura Ingalls Wilder",
    },
    {
        quote : "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
        author : "John Quincy Adams",
    },
    {
        quote : "The best way to find out if you can trust somebody is to trust them.",
        author : "Ernest Hemingway",
    },
    {
        quote : "The only Limit to our realization of tomorrow will be our doubts of today.",
        author : "Franklin D. Roosevelt",
    },
    {
        quote : "We may encounter many defeats but we must not be defeated.",
        author : "Maya Angelou",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
 