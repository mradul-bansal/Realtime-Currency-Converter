const BASE_URL = "https://api.currencyapi.com/v3/latest";
const API_KEY = "cur_live_2p4bIUDOuhGeMhI83XFFN6TqULVaNEkuTsqAIaSg";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const amountInput = document.querySelector(".amount input");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const updateExchangeRate = async () => {
    const fromCurrency = fromCurr.value;
    const toCurrency = toCurr.value;
    const amount = parseInt(amountInput.value);
  
    if (!amount) {
      msg.innerText = "Please enter an amount";
      return;
    }
  
    try {
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
      const data = await response.json();
  
      const exchangeRate = data.data[toCurrency].value;
      const result = amount * exchangeRate;
  
      msg.innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
      msg.innerText = "Error: " + error.message;
    }
  };

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});