const searchBtn = document.getElementById('quote-finder');
const randomQuote = document.getElementById('random-quote');

searchBtn.addEventListener('click', () => {
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => console.log(data));
});
