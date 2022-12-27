import { cardDetail,body } from "./busquedas.js"
const containerSuperspan = document.getElementById('superspan')
const busquedaDetail = document.createElement('div')
busquedaDetail.classList.add('superspan__container')

const closeDetailView = () =>{
    const btnClose = document.getElementById("close")
    btnClose.addEventListener('click',()=>{
      cardDetail.classList.add('hidden')
      containerSuperspan.removeChild(busquedaDetail)

    })
  }

export const detailView = (database,event) =>{
    
    const idBusqueda = event.target.parentNode.parentNode.parentNode.parentNode.querySelector('.idBusqueda').id
    
    database()
        .then(busquedas => 
            {const detalle = busquedas.filter(busqueda => busqueda.id == idBusqueda)

                busquedaDetail.innerHTML = 
                `
                <div class="ContenedorBotonTitulo"> 
                <h3 class="superspan__titulo">Propuestas Actuales</h3>
                <div class="containerBotonPrupuestas"><button id='close' class="botonPropuestas">X</button></div>
                </div>
                <section class="contenederDatosPrincipal">
                <div class="contenederDatos1">
                <div class="superspan__container__data">
                    <h2 class="container__data_titulo">Fecha</h2>
                    <p class="container__data_texto" name="fechaBusqueda" id="fechaBusqueda" cols="15" rows="1">${detalle[0].fecha}</p>
                </div>
                <div class="superspan__container__data">
                    <h2 class="container__data_titulo">Puesto</h2>
                    <p class="container__data_texto" name="puestoBusqueda" id="puestoBusqueda" cols="15" rows="1">${detalle[0].puesto}</p>
                </div>
                <div class="superspan__container__data">
                    <h2 class="container__data_titulo">Estado</h2>
                    <p class="container__data_texto" name="estadoBusqueda" id="estadoBusqueda" cols="15" rows="1">${detalle[0].estado}</p>
                </div>
                </div>
                <div class="contenederDatos2">
                <div class="superspan__container__data">
                    <h2 class="container__data_titulo">Detalle de la busqueda</h2>
                    <p class="container__data_texto" name="detalleBusqueda" id="detalleBusqueda" >${detalle[0].descripcion}</p>
                </div>
                <div class="superspan__container__data">
                <h2 class="container__data_titulo">Funciones</h2>
                <p class="container__data_texto" name="funcionesBusqueda" id="funcionesBusqueda" >${detalle[0].Funciones}</p>
                </div>
                <div class="superspan__container__data">
                    <h2 class="container__data_titulo">Requerimientos</h2>
                    <p class="container__data_texto" name="detalleBusqueda" id="detalleBusqueda" >${detalle[0].requisitos}</p>
                </div>
                </div>
                </section>
                `
                containerSuperspan.appendChild(busquedaDetail)
            }
        )
        .then(closeDetailView)  
}