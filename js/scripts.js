var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

    var element = document.createElement('li');
    var liElem = document.getElementsByTagName('li'); 
    var nextNumber = liElem.length;
    element.innerHTML = 'item ' + nextNumber;
    list.appendChild(element);
    
  });

  