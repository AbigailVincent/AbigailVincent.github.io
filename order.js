alert("Order Here!!!"); //pop up message welcoming to store
//customer input:
let name=prompt("Enter name: ");
let item=prompt("Enter item you would like to order: ");
let amount=prompt("How many would you like to order (1-99): ")
amount=parseInt(amount); //quanity is now int instead of string

//checks if number is between 1-99:
if(amount<1 ||amount>99){
    alert("invalid quantity!!!");
    return;
}
//military time
let date= new Date();
let hr=date.getHours();

let greeting;
if(hr<12){
    greeting="Good Morning!";
}else if(hr<18){
    greeting="Good Afternoon!!";
}else{
    greeting="Good Evening!!!";
}

let delivery=new Date();
delivery.setDate(delivery.getDate()+7); //adds 7 from day of month
let deliveryS=delivery.toDateString(); //so many global functions


document.writeln(`<p>${greeting} ${name} thank you for ordering :)</p>`);
document.writeln(`<p>You ordered ${amount} of ${item}.</p>`);
document.writeln(`Your package will arrive ${deliveryS} !!!`);