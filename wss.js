alert("Dr. Kasey Grey presents:");

alert("What she (actually) said!");

// How do I get the above two sentences to appear on the same "alert" screen, but below each other?

alert("The universal guide to understanding the magical and mystical mind of the Planet Earth female.");

alert("To ensure you get the correct answers please complete the following questions about your Planet Earth female.");

var name = prompt("What is the name of the female relating to your question?", "Type answer here");

var age = prompt("What is the age of the female relating to your question?", "Type answer here");

var quest = prompt("Finally! What did she say?", "Type question here").toLowerCase();

switch(quest) {
    case "i like you":
    alert("If it was said under a full moon, " + name + " was feeling pressure from the trees and really meant to say: I really need to leave this party now, but you keep on talking to me, so I will say I like you because I know it will make you think about it and give me a break to leave. If it was not a full moon, you might be in luck that she really likes you! My advise is to go for it anyway and tell her you like her too :)");
    break;
    case "What did you say?":
    alert(name + " suggests that you restructure your sentence into something that makes sense to her. Or more likely giving you the opportunity to either apologise and say something nice. About her preferrably.");
    break;
    case "I'm fine":
    alert("You better stop asking " + name + " if she is fine. She is fine, but will soon not be anymore if you keep on asking.");
    break;
    case "Maybe":
    alert("Said with a smile it means 'convince me'. Said with a straight face means 'probably not'.");
    break;
    case "I love you":
    alert("She loves you.")
    default:
    alert("She meant exactly what she said. You need to remember that " + name + " is already " + age + " years old on earth and really don't care speaking her mind anymore.");
    break;
}

// How do we ensure the comments are answered taking into account the punctuation marks and spaces etc?

var feel = prompt("Would you like to extend our session?").toLowerCase();

if (feel === "yes") {
    alert("Great! Our guide will have you speaking 'Earth Female' in no time!");
}
    else {
        alert("We're sorry to see you leave but hope you and " + name + " have long, happy and understandable conversations ahead!");
    }

// How do I get the system to run again after they said yes on var feel without repeating switch(quest)? 

/*
while (feel === yes){
    run switch(quest);
}
*/
