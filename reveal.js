window.addEventListener("load", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal, index) => {
        if (!reveal.dataset.animated) {
            reveal.style.transitionDelay = `${index * 0.4}s`;
            reveal.classList.add("active");
            reveal.dataset.animated = "true";
            
            // Remove transition after it completes
            reveal.addEventListener("transitionend", () => {
                reveal.style.transition = "none";
            }, { once: true });
        }
    });        
});