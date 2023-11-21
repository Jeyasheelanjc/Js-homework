var numbers = prompt("Enter sequence number")
var num1 = 0
var numb2 = 1
let series=[num1,numb2]
var nexTterm;
for (i = 0; i <= numbers; i++) {
  console.log(num1);
    nexTterm = num1 + numb2
    num1 = numb2
    numb2 = nexTterm
    series.push(nexTterm)
}
document.getElementById("result").innerHTML=series.join(", ")
