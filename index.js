var initialPrice = document.querySelector("#initial");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");

submit.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var cur = Number(currentPrice.value);

  calculate(ip, qty, cur);
}

function calculate(initial, quantity, current) {
  if (initial >= 0 && quantity >= 0 && current >= 0) {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var lossPer = ((initial - current) / initial) * 100;

      outputShow("loss is " + loss + " and percentage " + lossPer + " %");
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPer = ((current - initial) / initial) * 100;

      outputShow("profit is " + profit + " and percentage " + profitPer + " %");
    } else {
      outputShow("No pain, No gain");
    }
  } else {
    outputShow("Invalid  Number");
  }
}
function outputShow(message) {
  output.innerHTML = message;
}
