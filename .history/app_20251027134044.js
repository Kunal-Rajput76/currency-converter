// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";


// const BASE_URL="https://cat-fact.herokuapp.com/fact";
const url="curl --request GET \
	--url 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en' \
	--header 'x-rapidapi-host: weatherbit-v1-mashape.p.rapidapi.com'";
let promise=fetch(url);
console.log(promise);