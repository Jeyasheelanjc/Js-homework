
function find(number) {
    var number = prompt("Enter the number")
    if (isNaN(number)) {
        alert("Kindly enter the number")
    }
    else if (number > 0) {
        document.write("<h2> Its  is positive number </h2>");
    }
    else if (number == 0) {
        alert("You Entered zero")
    }
    else {
        document.write("<h2> Its  is negative number </h2>");
    }
}
find()