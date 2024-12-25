// Toggle Drawer
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.style.left === '0px') {
        drawer.style.left = '-250px';
    } else {
        drawer.style.left = '0px';
    }
}

// Image Slider
let currentIndex = 0;
const images = document.querySelector('.images');
const totalImages = images.children.length;

function slideImages() {
    currentIndex = (currentIndex + 1) % totalImages;
    images.style.transform = translateX(-${currentIndex * 100}%);
}

setInterval(slideImages, 3000);
