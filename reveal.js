window.addEventListener("load", () => {
    const reveals= document.querySelectorAll (".reveal");
    reveals.forEach((reveal, index) => {
        reveal.style.transitionDelay = `${index * 0.4}s`;
        reveal.classList.add("active");
    });        
});