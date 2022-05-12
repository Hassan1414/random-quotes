var quotes = [
    firstQuote = {
        author : "Oscar Wilde",
        quote : "Be yourself; everyone else is already taken."
    },
    secondQuote = {
        author : "Marilyn Monroe",
        quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    thirdQuote = {
        author : "Albert Einstein",
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
    },
    fourthQuote = {
        author : "Frank Zappa",
        quote : "So many books, so little time."
    },
    fifthQuote = {
        author : "Bernard M. Baruch",
        quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    sixthQuote = {
        author : "Dr. Seuss",
        quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    seventhQuote = {
        author : "Mae West",
        quote : "You only live once, but if you do it right, once is enough."
    },
    eighthQuote = {
        author : "Mahatma Gandhi",
        quote : "Be the change that you wish to see in the world."
    }
]

var quoteContainer = document.getElementById("quote")

// first solution using for loop i couldnt solve it as it alawys gives me the last iteration of for loop (i wanted to loop once every time i click the button and call the function)

// function quoteGenerator() {
//     var currentAuthor = "";
//     var currentQuote = "";

//     for (var i = 0; i < quotes.length; i++) {
//         currentAuthor = quotes[i].author
//         currentQuote = quotes[i].quote

//     }
//     console.log(currentAuthor,currentQuote);

// }

// second solution using math.random function

function quoteGenerator() {
    var randomNumber = Math.round(Math.random() * (quotes.length - 1));
    console.log(randomNumber);
    var currentAuthor = quotes[randomNumber].author;
    var currentQuote = quotes[randomNumber].quote;

    quoteContainer.innerHTML = `<p>"${currentQuote}"</p><p>-- ${currentAuthor}</p>`

}