const iconMenuAmburger = document.querySelector('.menuAmburguer')

iconMenuAmburger.addEventListener('click',()=>{
    const nav = document.getElementById('spanAmburger')
    const body = document.getElementById('body')
    nav.classList.toggle('translate')
    body.classList.toggle('body')
})

const menuLinks = document.querySelectorAll('.spanMenuHamburguer__link')
menuLinks.addEventListener('click',()=>{
    const body = document.getElementById('body')
    
    body.classList.remove('body')
})