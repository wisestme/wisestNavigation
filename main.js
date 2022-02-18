const menuBars = document.getElementById('menu_bars');
const overlay = document.getElementById('overlay');

const navItems = document.querySelectorAll('[class^="slide_"]');

// Control navigation animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide_${direction1}_${i + 1}`, `slide_${direction2}_${i + 1}`);
    })
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // show/hide menu
    overlay.classList.toggle('overlay_active');
    if(overlay.classList.contains('overlay_active')) {
        // animate-in overlay
        overlay.classList.replace('overlay_slide_left', 'overlay_slide_right');

        // animate-in nav items
        navAnimation('out', 'in');
    } else {
        // animate-out overlay
        overlay.classList.replace('overlay_slide_right', 'overlay_slide_left');
        
        // animate-out nav items
        navAnimation('in', 'out')
    }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);

navItems.forEach((navItem) => {
    navItem.addEventListener('click', toggleNav);
})

