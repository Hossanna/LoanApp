// alert("connected")
let points = 0;
  

// let today = new Date()
// today.setFullYear(2024, 1, 23)

// let sixMonths = new Date(2023/09/01)
// // sixMonths.setFullYear(2023, 9, 1)

// let oneMonth = new Date()
// oneMonth.setFullYear(2024, 6, 1)

// console.log(today);
// console.log(sixMonths);
// console.log(oneMonth);
// console.log(today.getDate() - oneMonth.getDate());

function validateForm() {
  let loan = document.getElementById("loan").value;
  let revenue = document.getElementById("revenue").value;
  let name = document.getElementById("fname").value;
  let form = document.getElementById("form");
  let myForm2 = document.getElementById("myForm2");
  let username = document.getElementById("username");
  let balance = document.getElementById("balance");
  let history = document.getElementById("history").value;
  let deposit = document.getElementById("deposit").value;
  let collection = document.getElementById("collection").value;
  let repayment = document.getElementById("repayment").value;
  let maxLoanAmount = (45 / 100) * revenue * 12;
  let loanLimit = document.getElementById("loanLimit");
  let loanAmount = document.getElementById("loanAmount");

  form.style.display = "none"
  myForm2.style.display = "block"
  username.innerText = `${name}`
  balance.innerText = `#${revenue}`
  loanLimit.innerText = `#${maxLoanAmount}`
  loanAmount.innerText = `#${loan}`



  // console.log(points);
  // console.log(loan);
  // console.log(revenue);
  // console.log(name);
  // console.log(maxLoanAmount);
  // console.log(collection);
  // console.log(history);
  // console.log(deposit);
  // console.log(repayment);
  // console.log(points);

  


  //steps to calculate points

  // balance in account more than amount needed for loan, 10pts, else, -10pts
  if (revenue > loan) {
    points = points + 10;
  } else if (revenue < loan) {
    points = points - 10;
  } else {
    points = 0;
  }

  // 6 months credit history, 10pts
  if (history >= 6) {
    points = points + 10;
  }

  // loan repayment, below 6 months, 5 pts
  if (repayment < 6) {
    points = points + 5;
  }

// if points >= 30, loan is successful, else it is not
if(points >= 30){
  alert("Your Loan has been Approved")
}
else{
  alert("You do not have sufficient points for this loan, you have " + points + "points")
}
  

  return true;
  
}

//   // last deposit date, within a month 5pts
//   if(deposit <= 1){
//     points = points + 10
//   }
//   // last loan collection date, above 6 months , 10pts
// if(collection >= 6){
//   points = points + 10
// }

//   // current, 10pts, savings, 5pts
// if (select.value == "current"){
//   points = points + 10
// }
// else if (select.value == "savings"){
//   points = points + 5
// }
