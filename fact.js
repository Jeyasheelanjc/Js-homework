var number=parseInt(prompt("Enter the number"))
if(isNaN(number)){
    alert("Enter number only")
}
else if(number<0){
    alert("Negative value does not exisit in factorial")
}
else if(number===0){
    document.write(`The Factorial  ${number} is 1`)
}
else{
    let fact=1;
    for(i=1; i<=number;i++){
        fact*=i;
    }
    document.write(fact)
}