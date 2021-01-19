const searchBtn = document.getElementById('quote-finder');
const randomQuote = document.getElementById('random-quote');
const h1 = document.createElement('h1');
const pTag = document.createElement('p');

searchBtn.addEventListener('click', () => {
  randomQuote.innerHTML = '';
  h1.innerHTML = '';
  pTag.innerHTML = '';
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      let randomizedQuote = data[Math.floor(Math.random() * data.length)];

      h1.append(randomizedQuote.text);
      pTag.append(randomizedQuote.author);

      randomQuote.append(h1, pTag);
    });
});
