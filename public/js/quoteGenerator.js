const searchBtn = document.getElementById('quote-finder');
const randomQuote = document.getElementById('random-quote');
const h1 = document.createElement('h1');
const pTag = document.createElement('p');

searchBtn.addEventListener('click', () => {
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      let randomizedQuote = data[Math.floor(Math.random() * data.length)];
      if (randomizedQuote.author === null) {
        return randomizedQuote.author === 'unknow';
      }
      h1.classList.add('card-text');
      pTag.classList.add('"blockquote-footer"');
      h1.append(randomizedQuote.text);
      pTag.append(randomizedQuote.author);
      randomQuote.classList.add('p-2');
      randomQuote.append(h1, pTag);
    });
  randomQuote.innerHTML = '';
  h1.innerHTML = '';
  pTag.innerHTML = '';
});
