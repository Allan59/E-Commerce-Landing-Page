const navLink = document.querySelector('.navLink')
const hamburgerOpen = document.querySelector('.hamburger-open')
const hamburgerClose = document.querySelector('.hamburger-close')

hamburgerOpen.addEventListener('click', ()=>{
    navLink.classList.toggle('active')
    hamburgerOpen.style.display = 'none';
    hamburgerClose.style.display = 'block'
})

hamburgerClose.addEventListener('click', ()=>{
    navLink.classList.toggle('active')
    hamburgerOpen.style.display = 'block';
    hamburgerClose.style.display = 'none'
})


// SLIDER

