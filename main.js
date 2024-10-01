let btns = document.querySelectorAll(".btn");
let content = document.querySelectorAll(".content");

btns[0].addEventListener("click",function(){
    // remove 
    btns.forEach(element => {
        element.classList.remove("activeBtn");
    });
    content.forEach(element => {
        element.classList.remove("active");
    });
    // add 
    btns[0].classList.add("activeBtn");
    content[0].classList.add("active");
})


btns[1].addEventListener("click",function(){
    // remove 
    btns.forEach(element => {
        element.classList.remove("activeBtn");
    });
    content.forEach(element => {
        element.classList.remove("active");
    });
    // add 
    btns[1].classList.add("activeBtn");
    content[1].classList.add("active");
})


btns[2].addEventListener("click",function(){
    // remove 
    btns.forEach(element => {
        element.classList.remove("activeBtn");
    });
    content.forEach(element => {
        element.classList.remove("active");
    });
    // add 
    btns[2].classList.add("activeBtn");
    content[2].classList.add("active");
})
