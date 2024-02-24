// alert("connected")

function validateForm() {
  let loan = document.getElementById("loan").value;
  let revenue = document.getElementById("revenue").value;
  let name = document.getElementById("fname").value;
  let form = document.getElementById("form");
  let myForm2 = document.getElementById("myForm2");
  let username = document.getElementById("username");
  let balance = document.getElementById("balance");
  let history = document.getElementById("history").value;
  let repayment = document.getElementById("repayment").value;
  let maxLoanAmount = (45 / 100) * revenue * 12;
  let loanLimit = document.getElementById("loanLimit");
  let loanAmount = document.getElementById("loanAmount");
  let deposit = document.getElementById("deposit").value;
  let collection = document.getElementById("collection").value;
  let accountType = document.getElementById("accountType").value;
  let points = 0;

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
  // console.log(points);

  // 6 months credit history, 10pts
  if (history >= 6) {
    points = points + 10;
  }
  // console.log(points);

  // loan repayment, below 6 months, 5 pts
  if (repayment < 6) {
    points = points + 5;
  }
  // console.log(points);

  // current, 10pts, savings, 5pts
  if (accountType == "savings") {
    points = points + 5;
  } else if (accountType == "current") {
    points = points + 10;
  }

  // console.log(points);

  // if points >= 30, loan is successful, else it is not
  if (points >= 30) {
    alert("Your Loan has been Approved");
  } else {
    alert(
      "You do not have sufficient points for this loan, you have " +
        points +
        "points"
    );
  }
  // console.log(points);

  form.style.display = "none"
  myForm2.style.display = "block"
  username.innerText = `${name}`
  balance.innerText = `#${revenue}`
  loanLimit.innerText = `#${maxLoanAmount}`
  loanAmount.innerText = `#${loan}`

  return true;

}


  // last loan collection date, above 6 months , 10pts
  // function subtract6Months(today) {
  //   today.setMonth(today.getMonth() - 6);
  //   return today;
  // }
  // let today = new Date();
  // console.log(today);
  // console.log(today.getMonth());

  // let newDate = subtract6Months(today);
  // console.log(newDate);
  // console.log(newDate.getMonth());

  // collection = collection.toString()
  // console.log(collection);
  // console.log(collection.getMonth());

  // if (collection < newDate) {
  //   points = points + 10;
  // }
  // console.log(points);

  // // last deposit date, within a month 5pts
  // function subtract1Month(today) {
  //   today.setMonth(today.getMonth() - 1);
  //   return today;
  // }

  // let newOneDate = subtract1Month(today);
  // // console.log(newOneDate);

  // if (deposit <= newOneDate) {
  //   points = points + 5;
  // }
  // console.log(points);
