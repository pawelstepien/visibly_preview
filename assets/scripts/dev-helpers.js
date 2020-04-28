const initDevHelpers = () => {
    const lockScrollTrigger = document.getElementById('lock-scroll-trigger');
    lockScrollTrigger.addEventListener('click', () => {
        document.body.classList.toggle('lock-scroll');
    });
}
export {initDevHelpers}