function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
var button = document.getElementsByClassName('.btn')
button.onclick = myFunction();