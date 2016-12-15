var btn = document.getElementsByTagName('button')[0];
var list = document.getElementById('thelist');

var add_element = function() {
    var entry = document.createElement('li');
    var content = document.createTextNode('what up');
    entry.appendChild(content);
    list.appendChild(entry);
    console.log('add entry');
};

btn.addEventListener("click", add_element);

