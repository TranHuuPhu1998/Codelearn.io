var random = document.getElementById('random');
var randomh2 = document.querySelector('.randomh2');
var element = document.createElement("input");

var  de = {person}
var person_in = 0;
de.person.onchange = function(e) {
    person_in = e.target.value;
}

random.onclick= function() {
    var number = Math.random();
    element.type = "text";
    element.value = Math.ceil(number * 10);
    randomh2.appendChild(element);
    update();
    function update(){
        if(person_in == Math.ceil(number * 10)){
            alert("is's correct");
        }else
        {
            alert("is's wrong");
        }
    
    } 
    

}
