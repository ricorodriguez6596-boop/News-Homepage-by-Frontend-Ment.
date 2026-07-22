let hamMenu = document.querySelector('.ham-menu-button')
let navList = document.querySelector('.nav-list')
let section = document.querySelector('.news-grid-section')
let hamOpenImg = document.querySelector('.ham-open-img')
let hamCloseImg = document.querySelector('.ham-close-img')

let menuOpen = true


let expand = () => {
    if (menuOpen) {
        navList.style.right = 0
        navList.style.opacity = 1
        menuOpen = false
        hamOpenImg.style.display = 'none'
        hamCloseImg.style.display = 'block'
    } else {
        navList.style.right = ''
        navList.style.opacity = 0
        menuOpen = true
        hamOpenImg.style.display = 'block'
        hamCloseImg.style.display = 'none'
    }

    let clos = () => {
        if (menuOpen === false) {
            navList.style.opacity = 0
            hamOpenImg.style.display = 'block'
            hamCloseImg.style.display = 'none'
            menuOpen = true
        }
    }

    section.addEventListener('click', clos)

}

hamMenu.addEventListener('click', expand)
