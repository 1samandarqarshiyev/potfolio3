import self from "../img/self.jpg"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpg"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Samandar",
    lastName: "Qarshiyev",
    position: "a Frontend developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌏',
            text: 'Located in Uz'
        },
        {
            emoji: "💻",
            text: "I study at the TIF"
        },
        {
            emoji: "📧",
            text: "azamatovich010@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://t.me/samandar_qarshiyev",
            icon: 'fa fa-telegram',
            label: 'telegram'
        },
        {
            link: "https://instagram.com/azamatovich01__",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/1samandarqarshiyev",
            icon: "fa fa-github",
            label: 'github'
        },

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Samandar. I'm a Junior Frontender. I study information technology at the Tashkent Institute of Finance, I like watching movies, and I believe that artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'github', 'bootstrap5', 'html5', 'css3', 'figma'],
            exposedTo: ['']
        }
    ,
    hobbies: [
        {
            label: 'playing chess',
            emoji: '♟️'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'watching youtube',
            emoji: '📱'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://ice-cream-project-bqeo5fo5z-1samandarqarshiyev.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/1samandarqarshiyev/Ice-Cream_Project", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://izgu-4s4p3yy66-1samandarqarshiyev.vercel.app",
            source: "https://github.com/1samandarqarshiyev/izgu",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://magazine-w3oq-2rm7u9iv0-1samandarqarshiyev.vercel.app",
            source: "https://github.com/1samandarqarshiyev/magazine",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://burger-project-bxrfho3i9-1samandarqarshiyev.vercel.app",
            source: "https://github.com/1samandarqarshiyev/Burger_project",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://time-3rdl7p2s8-1samandarqarshiyev.vercel.app",
            source: "https://github.com/1samandarqarshiyev/time",
            image: mock5
        }
    ]
}