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

/*---------------------*/

var h = document.getElementById('h');
var items = document.getElementsByTagName('li');
var h_old = h.innerHTML;

var set_heading = function() {
    var h_content = this.innerHTML;
    h.innerHTML = h_content;
}
var revert_heading = function() {
    h.innerHTML = h_old;
}
for (var i=0; i<items.length; i++){
    items[i].addEventListener('mouseover', set_heading);
    items[i].addEventListener('mouseout', revert_heading);
}
 

