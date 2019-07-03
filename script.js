let btn = document.querySelectorAll(".num");
let reset = document.querySelector('.clears');
let equal = document.querySelector(".equals");
let screen = document.querySelector(".viewer");

btn.forEach(function(btn){
    btn.addEventListener("click", function(){
        screen.innerHTML += btn.getAttribute("data-num") 
    }); 
})

equal.addEventListener('click', function(){
    screen.innerHTML = eval(screen.innerHTML);
})

reset.addEventListener('click', function(){
    screen.innerHTML = "";
});