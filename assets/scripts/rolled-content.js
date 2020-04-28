const initRolledContent = () => {
    const items = [].slice.call(document.querySelectorAll('.unrolling-content-wrapper'));
    const clickHandler = event => {
        const clickedItem = event.target.closest('.unrolling-content-wrapper');
        items.forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove('open');
            }
        })
        clickedItem.classList.toggle('open');
    };
    items.forEach(item => item.addEventListener('click', clickHandler));
}
export {initRolledContent}