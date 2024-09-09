function myFunction() {
  var x, y, text, texts, answer, hash, percentage;

  x = document.getElementById("input1").value.trim();
  y = document.getElementById("input2").value.trim();

  if (/^[a-zA-Z]+$/.test(x) && /^[a-zA-Z]+$/.test(y)) {
    // Combine the inputs and generate a hash
    var combinedString = x.toLowerCase() + y.toLowerCase();
    hash = 0;
    for (var i = 0; i < combinedString.length; i++) {
      hash = combinedString.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate a percentage from the hash
    percentage = Math.abs(hash % 100) + "%";

    // Code to handle valid string inputs
    text = x;
    texts = y;
    answer = percentage;
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
