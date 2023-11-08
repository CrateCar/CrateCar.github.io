window.onload =() => {
    document.getElementById("hero-display").style.transform = "translate(0px, 0px)";
    document.getElementById("hero-display").style.opacity = "1";
    setTimeout(()=>{
        document.getElementById("hero-display").style.transition = "none";  
    },500);
};
