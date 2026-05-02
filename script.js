const Quotes = ["The only way to do great work is to love what you do. - Steve Jobs", 
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
     "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
       "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"];
       const UsedIndexes = new Set()
       const quoteElement = document.getElementById("Quotes")
       let randomidx = 0;
       function generateQuote() {
        if (UsedIndexes.size>= Quotes.length){
        UsedIndexes.clear()}
        while (true) {

        const randomidx = Math.floor(Math.random()*Quotes.length)
        if(UsedIndexes.has(randomidx)) continue;
        const quote = Quotes[randomidx]
         quoteElement.innerHTML = quote
        UsedIndexes.add(randomidx)
        break
        }
    }
 