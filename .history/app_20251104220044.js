const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("result-text");

// Load currency options dynamically
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(res => res.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option1.text = currency;
      option2.value = option2.text = currency;
      fromCurrency.add(option1);
      toCurrency.add(option2);
    });
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
  });

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    resultText.innerText = "Please enter a valid amount!";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      resultText.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
    })
    .catch(() => {
      resultText.innerText = "Error fetching exchange rate!";
    });
});
