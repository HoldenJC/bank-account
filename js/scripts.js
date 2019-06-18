function BankAccount(name, availableFunds){
  this.name = name,
  this.availableFunds = availableFunds
}

BankAccount.prototype.depositFunds = function(moneyAmount){
  if(moneyAmount !== undefined && !isNaN(moneyAmount)){
    this.availableFunds += moneyAmount;
  }
}


BankAccount.prototype.withdrawFunds = function(moneyAmount){
  if(moneyAmount !== undefined && !isNaN(moneyAmount)){
    this.availableFunds -= moneyAmount;
  }
}

var bankAccount = new BankAccount();
bankAccount.availableFunds = 0;

$(function(){
  $("#bankForm").submit(function(event){
    event.preventDefault();

    debugger;

    var name = $("#userName").val();
    var initialDeposit = parseInt($("#userDeposit").val());
    var deposit = parseInt($("#depositAmount").val());
    var withdraw = parseInt($("#withdrawAmount").val());

    $("#userName").val("");
    $("#userDeposit").val("");
    $("#depositAmount").val("");
    $("#withdrawAmount").val("");

    bankAccount.depositFunds(initialDeposit);
    bankAccount.depositFunds(deposit);
    bankAccount.withdrawFunds(withdraw);

    $("#balanceAmount").text("$" + bankAccount.availableFunds.toFixed(2));

  });


});
