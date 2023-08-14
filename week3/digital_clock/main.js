const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// function dateDisplayer() {
//   hour.innerHTML = date.getHours();
//   minute.innerHTML = date.getMinutes();
//   second.innerHTML = date.getSeconds();
// }
var interval = setInterval(function dateDisplayer() {
  var date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();

  second.innerHTML = date.getSeconds();
}, 1000);

function dateFetcher() {
  var date = new Date();
  return date.getTime();
}


const randomColor = function (){
  const hex = "0123456789ABCDEF";
  let color = '#' 
  for(let i = 0; i<6; i++){
      color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
var quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra, type.fit",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln, type.fit",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe, type.fit",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu, type.fit",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg, type.fit",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle, type.fit",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster, type.fit",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha, type.fit",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch, type.fit",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark, type.fit",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer, type.fit",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: "type.fit",
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    author: "Dr. Seuss",
  },
  {
    text: "This too, shall pass.",
    author: "Anonymous",
  },
  {
    text: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The only person you should try to be better than is the person you were yesterday.",
    author: "Anonymous",
  },
  {
    text: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    author: "Harvey Fierstein",
  },
  {
    text: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    author: "C.S. Lewis",
  },
  {
    text: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    author: "Sador",
    citation: "Children of Húrin",
  },
  {
    text: "Life's too mysterious to take too serious.",
    author: "Mary Engelbreit",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    author: "Albert Einstein",
  },
  {
    text: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
    author: "Terry Pratchett",
    citation: "Witches Abroad",
    year: "1991",
  },
  {
    text: "There isn't a way things should be. There's just what happens, and what we do.",
    author: "Terry Pratchett",
    citation: "A Hat Full of Sky",
  },
  {
    text: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    author: "Rocky Balboa",
    citation: "Rocky",
    year: "1976",
  },
  {
    text: "More fuck yeah, less fuck that.",
    author: "Anonymous",
  },
  {
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African proverb",
  },
  {
    text: "It's OK to not be OK, as long as you don't stay that way.",
    author: "Anonymous",
  },
  {
    text: "I can be changed by what happens to me but I refuse to be reduced by it.",
    author: "Maya Angelou",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "T. Roosevelt",
  },
  {
    text: "May I never be complete. May I never be content. May I never be perfect.",
    author: "Chuck Palahniuk",
  },
  {
    text: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
    author: "Marie Curie",
  },
  {
    text: "Those who don't believe in magic will never find it.",
    author: "Roald Dahl",
  },
  {
    text: "There is no elevator to success  you have to take the stairs.",
    author: "Anonymous",
  },
  {
    text: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    author: "Jose Luis Borges",
  },
  {
    text: "It does not do to dwell on dreams and forget to live.",
    author: "Albus Dumbledore",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: "1997",
  },
  {
    text: "Don't sweat the petty things and don't pet the sweaty things.",
    author: "George Carlin",
  },
  {
    text: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Do not set yourself on fire in order to keep others warm.",
    author: "Anonymous",
  },
  {
    text: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
    author: "Doctor Who",
  },
  {
    text: "It's supposed to be hard. If it were easy, everyone would do it.",
    author: "Jimmy Dugan",
    citation: "A League of Their Own",
  },
  {
    text: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
    author: "Anonymous",
  },
  {
    text: "Life may not be the party we hoped for, but while we're here, we should dance.",
    author: "Anonymous",
  },
  {
    text: "Never cowardly or cruel. Never give up, never give in.",
    author: "Doctor Who",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "In 20 years, you probably won't even remember this.",
    author: "Anonymous",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    text: "Clear eyes, full hearts, can't lose.",
    author: "Dillon Panthers",
    citation: "Friday Night Lights",
    year: "1990",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
];

const quoteEle = document.getElementById("quoteDisplayer");
const authorEle = document.getElementById("authorName");

function quoteGenerator() {
  var index = Math.floor(Math.random() * quotes.length);
  // console.log(index);
  quoteEle.innerHTML = quotes[index].text;
  authorEle.innerHTML = "Author: " + quotes[index].author;
  document.getElementById('quotesDivID').style.backgroundImage = 'linear-gradient(100deg, ' + randomColor()+ '  ,' + randomColor()+')';
}
quoteGenerator();






