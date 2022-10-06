function generate(){
    var quotes ={
        "- Aristotle" : '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."',
        "- Albert Einstein" : '"I am thankful for all of those who said NO to me. It is becasue of them I am doing it myself."',
        "- Steve Jobs" : '"You can not connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your life. You have to trust in something; your gut, denstiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life."',
        "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
        
    
    }

    var authors = Object.keys(quotes);
    // console.log(authors);

    var author = authors[Math.floor(Math.random()*authors.length)];
    
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author; 


    
}