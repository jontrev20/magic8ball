var randNumber = Math.floor(Math.random()*20);
var responseList = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definately",
"You may rely on it.", "As I see it, yes.", "Most likely", "Outlook good.", "Yes.",,
"Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
"Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My sources say no.",
"Outlook not so good.", "Very doubtful."];

var resElement = document.querySelector("p");
resElement.innerHTML = responseList[randNumber];
