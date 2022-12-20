const botonBusquedas = document.getElementById("btn2")

botonBusquedas.addEventListener('click',()=>{
    const body = document.getElementById('body')
    nav.classList.toggle('translate')
    body.classList.toggle('body')
})