// alert("connected")

function validateForm() {
  let loan = document.getElementById("loan").value;
  let revenue = document.getElementById("revenue").value;
  let name = document.getElementById("fname").value;
  let form = document.getElementById("form");
  let myForm2 = document.getElementById("myForm2");
  let myForm3 = document.getElementById("myForm3");
  let username = document.getElementById("username");
  let usernamee = document.getElementById("usernamee");
  let balance = document.getElementById("balance");
  let history = document.getElementById("history").value;
  let repayment = document.getElementById("repayment").value;
  let maxLoanAmount = (45 / 100) * revenue * 12;
  let loanLimit = document.getElementById("loanLimit");
  let loanAmount = document.getElementById("loanAmount");
  let loanAmountt = document.getElementById("loanAmountt");
  let deposit = document.getElementById("deposit").value;
  let collection = document.getElementById("collection").value;
  let accountType = document.getElementById("accountType").value;
  let repaymentDate = document.getElementById("repaymentDate");
  let repaymentDatee = document.getElementById("repaymentDatee");

  let points = 0;

  //steps to calculate points

  // balance in account more than amount needed for loan, 10pts, else, -10pts
  if (revenue > loan) {
    points = points + 10;
  } else if (revenue < loan) {
    points = points - 10;
  }
  console.log(points);

  // 6 months credit history, 10pts
  if (history >= 6) {
    points = points + 10;
  }
  console.log(points);


  // last deposit date, within a month, 5pts
  if (doSomethingg() == true){
    points = points+5
  }
  console.log(points);


  //last loan collection date, above 6 months, 10pts
  if (doSomething() == true){
    points = points+10
  }
  console.log(points);


  // loan repayment, below 6 months, 5 pts
  if (repayment < 6 && repayment > 0) {
    points = points + 5;
  }
  console.log(points);


  // current, 10pts, savings, 5pts
  if (accountType == "savings") {
    points = points + 5;
  } else if (accountType == "current") {
    points = points + 10;
  }
  console.log(points);


  

  // // if points >= 30, loan is successful, else it is not
  // if (points >= 30) {
  //   alert("Your Loan has been Approved, you have " + points + "points");
  //   form.style.display = "none";
  //   myForm3.style.display = "block";
  //   usernamee.innerText = `${name}`;
  //   loanAmountt.innerText = `#${loan}`;

  // } else {
  //   alert(
  //     "You do not have sufficient points for this loan, you have " +
  //       points +
  //       "points"
  //   );
  //   form.style.display = "none";
  //   myForm2.style.display = "block";
  //   username.innerText = `${name}`;
  //   balance.innerText = `#${revenue}`;
  //   loanLimit.innerText = `#${maxLoanAmount}`;
  //   loanAmount.innerText = `#${loan}`;
  // }

  // let today = new Date();

  // function addOneMonth(today) {
  //   today.setMonth(today.getMonth() + 1);

  //   const f = new Intl.DateTimeFormat("en-us", {
  //     dateStyle: "full",
  //   });
  //   return f.format(today);
  // }
  
  // repaymentDate.innerText = addOneMonth(today);
  
  // repaymentDatee.innerText = addOneMonth(today);
  

  console.log(points);

  return true;

  
}

let today = new Date();
  // console.log(today);

let newDate = subtract6Months(today);
  // console.log(newDate);

  function subtract6Months(today) {
    today.setMonth(today.getMonth() - 6);
    return today;
  }

function doSomething(){
    var collection = document.getElementById("collection").value

    let date1 = new Date(collection)
    let date2 = newDate

    // console.log(date1);
    // console.log(date2);

    if (date1 < date2){
      return true
    }
    else{
      return false
    }

  
}

let todayy = new Date();
  // console.log(today);

let newDatee = subtract1Month(todayy);
  // console.log(newDate);

  function subtract1Month(todayy) {
    todayy.setMonth(todayy.getMonth() - 1);
    return todayy;
  }

function doSomethingg(){
    var deposit = document.getElementById("deposit").value

    let date1 = new Date(deposit)
    let date2 = newDatee

    // console.log(date1);
    // console.log(date2);

    if (date1 > date2){
      return true
    }
    else{
      return false
    }

  
}


