const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Stay foolish to stay sane.", author: "Maxime Lagacé" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Little things make big days.", author: "Unknown" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "A champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { text: "If you want to fly, give up everything that weighs you down.", author: "Buddha" },
  { text: "Work hard in silence. Let success make the noise.", author: "Frank Ocean" },
  { text: "Success is what comes after you stop making excuses.", author: "Luis Galarza" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Push yourself because no one else is going to do it for you.", author: "Unknown" },
  { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Never stop learning because life never stops teaching.", author: "Unknown" },
  { text: "Don’t call it a dream, call it a plan.", author: "Unknown" },
  { text: "If it doesn’t challenge you, it won’t change you.", author: "Fred DeVito" },
  { text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life.", author: "Naeem Callaway" },
  { text: "Hustle in silence and let your success make the noise.", author: "Frank Ocean" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },
  { text: "Success doesn’t come to you. You go to it.", author: "Marva Collins" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You learn more from failure than from success.", author: "Bill Gates" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder" },
  { text: "Don’t wish it were easier. Wish you were better.", author: "Jim Rohn" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Only put off until tomorrow what you are willing to die having left undone.", author: "Pablo Picasso" },
  { text: "If you don’t risk anything, you risk even more.", author: "Erica Jong" },
  { text: "Your big opportunity may be right where you are now.", author: "Napoleon Hill" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { text: "It’s never too late to be what you might have been.", author: "George Eliot" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don’t count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Believe in yourself. You are braver than you think.", author: "A.A. Milne" },
  { text: "Discipline is doing what needs to be done, even if you don’t want to do it.", author: "Unknown" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Be fearless in the pursuit of what sets your soul on fire.", author: "Jennifer Lee" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Your only limit is your mind.", author: "Unknown" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" }
];

let currentIndex = -1;

function displayQuote(quote) {
  document.getElementById("quote").innerText = quote.text;
  document.getElementById("author").innerText = `- ${quote.author}`;
}

function getQuote() {
  currentIndex++;
  if (currentIndex >= quotes.length) {
    currentIndex = 0; // Loop to first if you reach end
  }
  displayQuote(quotes[currentIndex]);
}

getQuote(); // Display the first quote on page load

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuote(quotes[currentIndex]);
  } else {
    alert("You're at the first quote!");
  }
}