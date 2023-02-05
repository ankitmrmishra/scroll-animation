const boxes = document.querySelectorAll('.content')
// window.addeventlistenere is done because we are scrolling on the window not on the content screen....
window.addEventListener('scroll' , checkBoxes)
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
