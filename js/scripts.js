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

function alertUser(name){
  $("#alertField").append("<div id=\"userAlert\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>");

  $("#userAlert").append("Thank you for the transaction, " + name + ". You can view your updated balance above.");

};

$(function(){

  $("#bankForm").submit(function(event){
    event.preventDefault();

    $("#initialInfo").fadeOut(800);
    $("#laterInfo").delay(800).fadeIn(800);

    // debugger;

    var name = $("#userName").val();
    var initialDeposit = parseInt($("#userDeposit").val());
    var deposit = parseInt($("#depositAmount").val());
    var withdraw = parseInt($("#withdrawAmount").val());

    // $("#userName").val("");
    $("#userDeposit").val("");
    $("#depositAmount").val("");
    $("#withdrawAmount").val("");

    bankAccount.depositFunds(initialDeposit);
    bankAccount.depositFunds(deposit);
    bankAccount.withdrawFunds(withdraw);

    $("#balanceAmount").text("$" + bankAccount.availableFunds.toFixed(2));

    alertUser(name);

  });


});
