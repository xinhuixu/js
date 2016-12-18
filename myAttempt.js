var b = document.getElementById("b");
var list = document.getElementById("thelist");


//Clicking button to create new element in list
var f = function(){
    // console.log(list);
    
    var newBullet = document.createElement('li');
    newBullet.innerHTML = "new item"
    list.appendChild(newBullet);

    //each new element must perform the same actions
    //as the original elements
    newBullet.addEventListener('mouseover', set_heading);
    newBullet.addEventListener('mouseout', revert_heading);
    newBullet.addEventListener('click', remove_item);

    /*
    console.log(newBullet);
    console.log(list);
    */
};


b.addEventListener("click",f);


/////////////////////////////////////////////////

var h = document.getElementById("h");
var origHead = h.innerHTML;
var listElements = document.getElementsByTagName("li");

var set_heading = function() {
    var h_content = this.innerHTML;//content in element of list
    h.innerHTML = h_content;
}
var revert_heading = function() {
    h.innerHTML = origHead; //original heading content
}
var remove_item = function() {
    this.remove();
}


//Must perform the action for any of the original elements in the list
for (i = 0; i < listElements.length; i++){
    listElements[i].addEventListener('mouseover', set_heading);
    listElements[i].addEventListener('mouseout', revert_heading);
    listElements[i].addEventListener('click', remove_item);
};


////////////////////////////////////////

var list2 = document.getElementById("thelist2")


var fib = function(num){
    if (n <= 2){
	return 1;
    }
    else{
	return fib(n-1) + fib(n-2);
    }
};

var f2 = function(){
    // console.log(list2);
    
    var newBullet2 = document.createElement('li');
    var len = list2.getElementsByTagName("li").length;
    var num;
    if (len == 0){
	num = fib(0);
    }
    else{
	num = fib(len-1);
    }

    newBullet2.innerHTML = num;
    list2.appendChild(newBullet2);
    
};`

    b2.addEventListener("click",f2);
