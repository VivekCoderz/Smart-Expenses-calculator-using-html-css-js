const income = document.getElementById("income");
const expenses = document.getElementById("expenses");
const form = document.querySelector("form");
const output = document.getElementById("output-inactive");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  output.innerHTML = "";

  // Empty or invalid input gave NaN% (0 / 0), so check it first
  if (income.value === "" || expenses.value === "" || +income.value <= 0 || +expenses.value < 0) {
    const p = document.createElement("p");
    p.innerText = "Please enter an income greater than 0 and expenses of 0 or more";
    p.style.color = "red";
    output.setAttribute("id", "output");
    return output.appendChild(p);
  }

  if (+income.value < +expenses.value) {
    const p = document.createElement("p");
    p.innerText = `please earn ${+expenses.value - +income.value} more money`;
    p.style.color = "red";
    output.setAttribute("id", "output");
    return output.appendChild(p);
  }

  const h2 = document.createElement("h2");
  h2.innerText = `Output`;

  const Remaning = document.createElement("div");
  Remaning.innerText = `Remaining Balance : ${income.value - expenses.value} Rs`;

  const saving = document.createElement("div");
  saving.innerText = `Saving Percentage : ${+(((income.value - expenses.value) / income.value) * 100).toFixed(2)}%`;

  const ex = document.createElement("div");
  ex.innerText = `Expenses Percentage : ${+((expenses.value / income.value) * 100).toFixed(2)}%`;
  output.setAttribute("id", "output");

  output.appendChild(h2);
  output.appendChild(Remaning);
  output.appendChild(saving);
  output.appendChild(ex);
});
