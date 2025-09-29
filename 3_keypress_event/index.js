const demo = document.querySelector('#demo')
const area = document.querySelector('#area')

area.addEventListener('keyup', () => {
    demo.textContent = '*'.repeat(area.value.length)
}) ;