var h = document.getElementById('h');
var h_old = h.innerHTML;
var btn = document.getElementsByTagName('button')[0];
var list = document.getElementById('thelist');
var items = document.getElementsByTagName('li');


var set_heading = function() {
    var h_content = this.innerHTML;
    h.innerHTML = h_content;
}
var revert_heading = function() {
    h.innerHTML = h_old;
}
var remove_item = function() {
    this.remove();
}

var item_addEL = function(item) {
    item.addEventListener('mouseover', set_heading);
    item.addEventListener('mouseout', revert_heading);
    item.addEventListener('click', remove_item);
}

var add_element = function() {
    var item = document.createElement('li');
    var content = document.createTextNode('what up');
    item.appendChild(content);
    list.appendChild(item);
    item_addEL(item);
};

btn.addEventListener("click", add_element);







 

