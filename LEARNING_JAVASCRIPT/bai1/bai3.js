var input = document.querySelector('input[type="submit"]');
var inputrs = document.querySelector('#rs');

var dientinh = {
    canh1,canh2,canh3,
}

var rs_canh1 = 0;

var rs_canh2 = 0;

var rs_canh3 = 0;

dientinh.canh1.onchange= function(e) {
    rs_canh1 = e.target.value;
}
dientinh.canh2.onchange= function(e) {
    rs_canh2 = e.target.value;
}
dientinh.canh3.onchange= function(e) {
    rs_canh3 = e.target.value;
}

input.onclick = function(e) {
    e.preventDefault();
    let s = 0;let p = 0;
    s =  (+rs_canh1 + +rs_canh2 + +rs_canh3) / 2 ;

    p = Math.sqrt(s*((s - rs_canh1)*(s - rs_canh2)*(s - rs_canh3)));
    console.log(p);
    inputrs.value = p;
}
