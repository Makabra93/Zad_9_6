var list = document.getElementById('list');
var add = document.getElementById('addElem');
var task = document.getElementById('rev');

add.addEventListener('click', function() {

    var element = document.createElement('li');
    var liElem = document.getElementsByTagName('li'); 
    var nextNumber = liElem.length;
    element.innerHTML = 'item ' + nextNumber;
    list.appendChild(element);

  });

task.addEventListener('click', function() {

    var header = document.getElementById('he3');
    header.innerText = '9.6!';

  });

  