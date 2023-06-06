
function myFunction() {
  var x, text,y,texts,c,z;
     c = Math.random();
  c = c * 100;
  c = Math.floor(c);
  z = c + "%";
  x = document.getElementById("input1").value;
  y = document.getElementById("input2").value;
  if (/^[a-zA-Z]+$/.test(x) && /^[a-zA-Z]+$/.test(y)) {
  // Code to handle valid string inputs
  text = x;
  texts = y;
  answer = z;
} else {
  // Code to handle invalid inputs
  text = "Invalid input";
  texts = "Invalid input";
  answer = "Error";
}
  document.getElementById("atu").innerHTML = text;
  document.getElementById("wonderwoman").innerHTML = texts;
  document.getElementById("percent").innerHTML = answer;
  
}