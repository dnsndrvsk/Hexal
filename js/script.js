

var portfolio = document.querySelector('#portfolio');

function close() {
  var overlay = document.querySelector('.overlay');
  portfolio.removeChild(overlay);
  overlay.removeEventListener('click', close);
}

var items = document.querySelectorAll('#portfolio .item');

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  
  item.addEventListener('click', function(e) {
    
    var elem = document.createDocumentFragment();
    
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', close);

    var image = document.createElement('img');
    image.src = e.target.src;
    image.classList.add('image');
    
    overlay.appendChild(image);
    
    elem.appendChild(overlay);

    portfolio.appendChild(elem);
  });
}