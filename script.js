const grid = document.querySelectorAll('.grid');

grid.forEach((g) => {
    g.addEventListener('click', () => {
        removeActiveClass()
        g.classList.add('active');
    })
})

function removeActiveClass(){
    grid.forEach((g) => {
        g.classList.remove('active');
    })
}