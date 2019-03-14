const discord = require("discord.js");
const bot = new discord.Client();
const key = "NTU1MDY3MzQwNjUyNTQ0MDAy.D2vlVg.7Fdh9E6eoBBummd89zC6pB8WIZ8";
const postfix = '!';
bot.on('ready' , () =>{
    console.log('m ready')
    console.log(Math.random())
});
bot.on("message", msg => {
    var user_name = msg.author;
     var quotes = [
        "The Way Get Started Is To Quit Talking And Begin Doing",
        "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        "Don’t Let Yesterday Take Up Too Much Of Today",
        "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
        "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough",
        "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur",
        "We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou",
        "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do",
        "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
        "We Generate Fears While We Sit. We Overcome Them By Action",
        "Whether You Think You Can Or Think You Can’t, You’re Right.",
        "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing",
        "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
        "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
        "Creativity Is Intelligence Having Fun.",
        "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
        "Do What You Can With All You Have, Wherever You Are",
        "Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.",
        "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
        "To See What Is Right And Not Do It Is A Lack Of Courage",
        "Reading Is To The Mind, As Exercise Is To The Body.",
        "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
        "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!",
        "Things Work Out Best For Those Who Make The Best Of How Things Work Out",
        "A Room Without Books Is Like A Body Without A Soul.",
        "I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time."  
    ];
     function clear_af(){
         cb_s = false;
    }
    var cb_s = true;
    if (msg.content.toLowerCase().startsWith("!" + "clearchat") && cb_s) {
        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 100});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }
    if(msg.content.startsWith(postfix + "motivation") || msg.content.startsWith(postfix + "Motivation") || msg.content.startsWith(postfix + "MOTIVATION")){
        function myf(){
            var a = quotes[Math.floor(Math.random() * quotes.length)];
            msg.channel.send(a);
        }
        myf();
    }


        // const user = msg.author;
        // var time = setTimeout(mt ,10000)
        // msg.channel.send("Hello " + user + " I will send Your Motivational quote After 10s.")
        // function mt(){
        //     var a = Math.floor( Math.random() * array.length);
        //     msg.channel.send(array[a])
        //     console.log(a)
        // }
       
    }
);

bot.login(key)