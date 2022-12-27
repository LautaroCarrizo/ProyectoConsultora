import { detailView } from "./detailBusquedas.js"
export const cardDetail = document.getElementById('superspan')
export const body = document.getElementById('body')
const busquedasContainer = document.getElementById('conteinerBusquedas')

const database = async () =>{
    try{
        const get = await fetch('./../../../database/busquedas.json')
        const data = await get.json()
        return data.busquedas
    } catch{err => err}
} 

const detailHandler = () =>{
  const botonBusquedas = document.querySelectorAll("#btn2")
  botonBusquedas.forEach(button => button.addEventListener('click',(event)=>{
    cardDetail.classList.remove('hidden')
    detailView(database,event)

  }))
}

database()
    .then(busquedas => 
        {busquedas.forEach(({id,fecha,puesto,estado,descripcion,requisitos}) =>{
                const busqueda= document.createElement('div')
                busqueda.classList.add("referenciasBusquedas")
                busqueda.innerHTML = `
                    <div class='idBusqueda' id='${id}'>
                        <h3>${puesto}</h3>
                    </div>               
                    <div class="propuestasBusquedas">
                        <p>${descripcion}</p>
                        <div class="btn2" id="btn2">
                            <a id="infoPropuesta"><span>información</span></a>
                        </div>
                    </div>
                `
                busquedasContainer.appendChild(busqueda)
            })
    })  
    .then(detailHandler)