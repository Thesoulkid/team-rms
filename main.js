// Add 3D Scrolling Effect
document.addEventListener("mousemove", (event) => {
    const container = document.querySelector(".container");
    const x = (window.innerWidth - event.pageX * 2) / 50;
    const y = (window.innerHeight - event.pageY * 2) / 50;
    container.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});