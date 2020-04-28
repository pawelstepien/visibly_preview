const initHamburgerMenu = () => {
    const navigation = document.getElementById('navigation');
    const hamburger = document.getElementById('hamburger');
    let lastScroll = window.scrollY;

    const hamburgerClickHandle = event => {
        if (navigation.classList.contains('expanded')) {
            navigation.classList.remove('expanded');
            // navigation.style.height = '';
        } else {
            navigation.classList.add('expanded');
        }
    };

    const scrollHandle = event => {
        if (lastScroll > window.scrollY) {
            navigation.classList.remove('hide');
        } else if (!navigation.classList.contains('expanded') && lastScroll < window.scrollY && window.scrollY > 0) {
            navigation.classList.add('hide');
        }
        lastScroll = window.scrollY;
    };

    const resizeHandle = () => {
        lastScroll = window.scrollY;
        if (window.innerWidth >= 1024) {
            navigation.style.height = '';
            navigation.classList.remove('expanded')
        }
    };

    hamburger.addEventListener('click', hamburgerClickHandle);
    // window.addEventListener('scroll', scrollHandle);
    window.addEventListener('resize', resizeHandle);
};
export {initHamburgerMenu};