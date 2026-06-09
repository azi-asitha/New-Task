let amount = 8000;
let finalAmount;

if(amount > 5000 ){
    finalAmount = amount - (amount * 20/100);
}else if (amount >2000){
    finalAmount = amount - (amount * 10/100);
}else{
    finalAmount = amount;
}
 console.log("finalAmount :$" + finalAmount);