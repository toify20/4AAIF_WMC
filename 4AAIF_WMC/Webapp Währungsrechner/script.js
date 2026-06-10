const rates = {
  EUR: 1,
  USD: 1.14,
  GBP: 0.85,
  JPY: 178,
  CHF: 1.05,
};

let history = [];

function calc() {
  const amount = Number(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  const amountInEuro = amount / rates[from];
  const converted = amountInEuro * rates[to];
  const result = converted.toFixed(2);

  document.getElementById("result").value = result;
  saveHistory(amount, from, result, to);
}

function saveHistory(amount, from, result, to) {
  history.push(`${amount} ${from} → ${result} ${to}`);
}

function showPage(page) {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("historyPage").classList.add("hidden");
  document.getElementById("aboutPage").classList.add("hidden");

  document.getElementById(page + "Page").classList.remove("hidden");

  if (page === "history") {
    document.getElementById("historyList").innerHTML =
      history.length === 0 ? "No history yet." : history.join("<br>");
  }

  closeMenu();
}

function openMenu() {
  document.getElementById("sideMenu").style.width = "280px";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

function updateFlags() {
  const flags = {
    EUR: "bilder/euflag.jpg",
    USD: "bilder/usflag.jpg",
    GBP: "bilder/ukflag.png",
    JPY: "bilder/japanflag.png",
    CHF: "bilder/switzerlandflag.png",
  };

  document.getElementById("fromFlag").src =
    flags[document.getElementById("fromCurrency").value];

  document.getElementById("toFlag").src =
    flags[document.getElementById("toCurrency").value];
}

function swapCurrencies() {
  const from = document.getElementById("fromCurrency");
  const to = document.getElementById("toCurrency");

  const temp = from.value;
  from.value = to.value;
  to.value = temp;

  updateFlags();
  calc();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calc();
  }
});
