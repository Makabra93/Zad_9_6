

var buttons = document.getElementsByClassName('button');
var buttonLength = buttons.length;


    for (var a = 0 ; a < buttonLength ; a++) {
    var buttonText = buttons[a].innerText;
    console.log('button ' + a + ' text is ' + buttonText);
}
