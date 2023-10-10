window.addEventListener("scroll", function() {
    var navb= this.document.querySelector(".navbar");
    navb.classList.toggle("renk",window.scrollY>0);
})