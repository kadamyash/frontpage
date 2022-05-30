 

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
})

function hidePopup(){
    document.getElementById("popup").style.display = "none";
    localStorage.setItem("cookiepolicy", true)
}

// navbar

// const burger = document.getElementById("burger");
// const navLinks = document.querySelector(".navlinks");
// const links = document.querySelectorAll(".navlinks li");
// let menuOpen = false;

// burger.addEventListener("click", ()=>{
//     navLinks.classList.toggle("open");
//     if(!menuOpen){
//         burger.classList.add("open-stack");
//         menuOpen = true;
//     }
//     else{
//         burger.classList.remove("open-stack");
//         menuOpen = false;
//     }
//     links.forEach(link=>link.addEventListener("click", ()=>{
//         navLinks.classList.remove("open");
//         burger.classList.remove("open-stack");
//         menuOpen = false;
//     }));
// });

function redirect(url){
    window.open(url);
}

// loading animation 

$(window).load(function() {
    // Animate loader off screen
    $(".loading-animation").fadeOut(500);
    $(".navbar").slideDown(500);
    $(".container").fadeIn(500);
});