let count = 0;
function increment() {
count++;
document.getElementById('counting').innerHTML ="Count: "+ count;
}
function decrement() {
count--;
document.getElementById('counting').innerHTML = "Count: "+ count;
}