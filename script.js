const quotes = [
    
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do. ",
    "Don’t watch the clock; do what it does. Keep going. ",
    "You miss 100% of the shots you don’t take.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
  ];
  const icons = [
   
   "– Charles R. Swindoll",
   "– Winston Churchill",
   "– Steve Jobs",
   " – Sam Levenson",
   " – Wayne Gretzky",
   " – Theodore Roosevelt",
   " – Franklin D. Roosevelt",

  ]

  function tap(){

  const a= Math.floor(Math.random()*quotes.length)

   document.getElementById("display").innerHTML = quotes [a];
   

   document.getElementById("window").innerHTML = icons [a]




}