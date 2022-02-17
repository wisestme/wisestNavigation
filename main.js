const menuBars = document.getElementById('menu_bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav_1');
const nav2 = document.getElementById('nav_2');
const nav3 = document.getElementById('nav_3');
const nav4 = document.getElementById('nav_4');
const nav5 = document.getElementById('nav_5');

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // show/hide menu
    overlay.classList.toggle('overlay_active');
    if(overlay.classList.contains('overlay_active')) {
        // animate-in overlay
        overlay.classList.add('overlay_slide_right');
        overlay.classList.remove('overlay_slide_left');
    } else {
        // animate-out overlay
        overlay.classList.add('overlay_slide_left');
        overlay.classList.remove('overlay_slide_right');
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
