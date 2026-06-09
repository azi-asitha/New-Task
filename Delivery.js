let orderAmount = 600;
let FinalBill;

if(orderAmount > 500){
  FinalBill = orderAmount;
    console.log("You got a Free Delivery");
}else{
    FinalBill = orderAmount +50;
    console.log("Delivery Charge:$50");
}
console.log("FinalBill:$" + FinalBill);