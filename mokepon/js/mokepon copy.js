let ataqueJugador
let ataqueAzarEnemigo
let jugada
let misVidas=3
let vidasEnemigo=3


//se define una variable global llamada ataque jugador que va a cambiar su valor dependiendo del boton de ataque que se presione
const iniciarJuego=()=>{
    //para seleccionar el boton de seleccion mascota
    let seleccionMascota=document.getElementById('boton_mascota')
    //para darle la accion al boton de mascota cuando haga click y que debe de hacer
    seleccionMascota.addEventListener("click",seleccionDeMascota)
    //selecciona el boton enemigo con id selecion_enemigo
    let botonEnemigo=document.getElementById('selecion_enemigo')
    //se agrega un listener que al hacer click, haga algo
    botonEnemigo.addEventListener("click", accionBotonEnemigo)
    //se agregan todos los botones de los ataques
    let botonAgua=document.getElementById('boton_agua')
    //cada boton debe de tener su listener
    botonAgua.addEventListener('click',ataqueAgua)
    let botonFuego=document.getElementById('boton_fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonTierra=document.getElementById('boton_tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonBatalla=document.getElementById('selecion_ataque_enemigo')
    botonBatalla.addEventListener('click',batalla)
    let botonReiniciar=document.getElementById('boton_reiniciar')
    botonReiniciar.addEventListener('click',reiniciarjuego)
    let seccionSeleccionAtaque=document.getElementById('seleccion_ataque')
    //hacer que la seccion no se vea se pone style.display='none'
    seccionSeleccionAtaque.style.display='none'
    let seccionEnemigo=document.getElementById('enemigo')
    seccionEnemigo.style.display='none'
    let seccionMarcador=document.getElementById('marcador')
    seccionMarcador.style.display='none'
    let seccionMensajes=document.getElementById('mensajes')
    seccionMensajes.style.display='none'
    let seccionReiniciar=document.getElementById('reiniciar')
    seccionReiniciar.style.display='none'
    let seccionAtaqueEnemigo=document.getElementById('ataque_enemigo')
    seccionAtaqueEnemigo.style.display='none'
    }

//se debe de generar una funcion en la que se indique que debe de hacer el boton
//cuando se haga click esta funcion se debe de poner en el addEventListener
const seleccionDeMascota=()=>{
    //se selecciona la seccion completa de seleccion mascota
    let seccionSelccionMascota=document.getElementById('seleccion_mascota')
    //para seleccionar los elementos que se guardaron en el html por nombre de 
    //id  se usa document.getElementById('el ida que se puso')
    let inputHipodoge=document.getElementById('hipodoge')
    let inputCapipepo=document.getElementById('capipepo')
    let inputRatiguya=document.getElementById('ratiguya')
    let inputLangostelvis=document.getElementById('langostelvis')
    let inputTucapalma=document.getElementById('tucapalma')
    let inputPydos=document.getElementById('pydos')
    //se define una variable que va a ser la que queremos que se ponga 
    //en un span cuando se haga click con el boton
    let nombre_mascota=document.getElementById('mascota_jugador')
    //para checar que se  haya selecionado alguna de las opciocnes 
    //se pone el elemento y se revisa si esta seleccionado (checked) 
    //si aparece seleccionado envia true, si no envia false, por lo que se puede
    //usar un if 
    if(inputHipodoge.checked){
        //si la opcion de hipodoge esta seleccionada, queremos que en el span de la pagina con el id mascota_jugador
        //se ponga el nombre de hipodoge mediante la siguiente linea nombre_mascota.innerHTML
        nombre_mascota.innerHTML='hipodoge'
    }else if(inputCapipepo.checked){
        nombre_mascota.innerHTML='capipepo'
    }else if(inputRatiguya.checked){
        nombre_mascota.innerHTML='ratiguya'
    }else if(inputLangostelvis.checked){
        nombre_mascota.innerHTML='langostelvis'
    }else if(inputTucapalma.checked){
        nombre_mascota.innerHTML='tucapalma'
    }else if(inputPydos.checked){
        nombre_mascota.innerHTML='pydos'
    }else{
        alert('selecciona uno')
    }
    let seccionSeleccionAtaque=document.getElementById('seleccion_ataque')
    seccionSeleccionAtaque.style.display='flex'
    
    seccionSelccionMascota.style.display='none'
}

//se definen las funciones que se quiere que se haga cada vez que se haga click en cada uno de los botones de ataque
const ataqueFuego=()=>{
    ataqueJugador='Fuego 🔥'
    //se define el id de ataque para que se inserte en el span de la seccion seleccion_ataque
    let ataqueSeleccionado=document.getElementById('ataque')
    ataqueSeleccionado.innerHTML=ataqueJugador
    let seccionEnemigo=document.getElementById('enemigo')
    seccionEnemigo.style.display='block' 
}
const ataqueAgua=()=>{
    ataqueJugador='Agua 💧'
    //se define el id de ataque para que se inserte en el span de la seccion seleccion_ataque
    let ataqueSeleccionado=document.getElementById('ataque')
    ataqueSeleccionado.innerHTML=ataqueJugador
    let seccionEnemigo=document.getElementById('enemigo')
    //hacer que aparezca la seccion que se tenia escondida.
    //se pone style.display='block'
    seccionEnemigo.style.display='block' 
}
const ataqueTierra=()=>{
    ataqueJugador='Tierra 🌿'
    //se define el id de ataque para que se inserte en el span de la seccion seleccion_ataque
    let ataqueSeleccionado=document.getElementById('ataque')
    ataqueSeleccionado.innerHTML=ataqueJugador
    let seccionEnemigo=document.getElementById('enemigo')
    seccionEnemigo.style.display='block' 

}

//lo que queremos que haga cada vez que se accione el boton seleccion enemigo
const accionBotonEnemigo=()=>{
    let ataque=document.getElementById('ataque')
    let jugada=0
    const enemigo_azar=()=>{
        const mokepones=['hipodoge','capipepo','ratiguya','langostelvis','tucapalma','pydos']
        const azar=(cantidad)=>{
            return  Math.floor(Math.random()*cantidad)
        }
        return mokepones[azar(6)]
    }
    //ahora insertamos el nombre del enemigo seleccionado al azar en span con el id mascota_enemigo
    //primero se seleccionar el elemento
    let mascotaEnemigo=document.getElementById('mascota_enemigo')
    mascotaEnemigo.innerHTML=enemigo_azar()   

    //poner que aparezca la seccion batalla
    let seccionAtaqueEnemigo=document.getElementById('ataque_enemigo')
    seccionAtaqueEnemigo.style.display='block'
    let seccionMarcador=document.getElementById('marcador')
    seccionMarcador.style.display='block'
 
}

const batalla=()=>{

    let seccionMensajes=document.getElementById('mensajes')
    seccionMensajes.style.display='block'
    let resultado
    const ataqueEnemigo=()=>{
        let tiposAtaques=["Fuego 🔥", "Agua 💧", "Tierra 🌿"]
        const azar=(cantidad)=>{
            return  Math.floor(Math.random()*cantidad)
        }
        return tiposAtaques[azar(3)]
    }
    ataqueAzarEnemigo=ataqueEnemigo()

    const juego=()=>{
        if(ataqueJugador=='Fuego 🔥' && ataqueAzarEnemigo=='Tierra 🌿'){
            resultado='Ganaste'
            vidasEnemigo--
        }else if(ataqueJugador=='Agua 💧' && ataqueAzarEnemigo=='Fuego 🔥'){
            resultado='Ganaste'
            vidasEnemigo--
        }else if(ataqueJugador=='Tierra 🌿' && ataqueAzarEnemigo=='Agua 💧'){
            resultado='Ganaste'
            vidasEnemigo--
        }else if(ataqueJugador==ataqueAzarEnemigo){
            resultado="Empate"
        }else{
            resultado="Perdiste"
            misVidas --
        }
    }
    juego()
    let spanMisVidas=document.getElementById('mis_vidas')
    let spanVidasEnemigo=document.getElementById('vidas_enemigo')
    let divJugador1=document.getElementById('jugador1')
    let divContrincante=document.getElementById('contrincante')
    let ataqueJugador1=document.createElement('p')
    let ataqueContrincante=document.createElement('p')
    //nuevoMensaje.innerHTML=` tu mascota ataco con ${ataqueJugador}, tu enemigo atacó con      
    //${ataqueAzarEnemigo}, por lo tanto         ${resultado}`
    ataqueJugador1.appendChild(ataqueJugador)
    divJugador1.appendChild(ataqueJugador1)
    ataqueContrincante.appendChild=(ataqueAzarEnemigo)
    divContrincante.appendChild=(ataqueContrincante)
    spanMisVidas.innerHTML=misVidas
    spanVidasEnemigo.innerHTML=vidasEnemigo

    const revisarVidas=()=>{
        const deshabilitar=()=>{
            let botonBatalla=document.getElementById('selecion_ataque_enemigo')
            //hacer que un boton se apague, es decir que no se pueda hacer click
            botonBatalla.disabled=true
        }
        if(vidasEnemigo ==0){
            let seccionMensajeganador=document.getElementById('mensaje_ganador')
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=` SE ACABO EL JUEGO, GANASTE`
            seccionMensajeganador.appendChild(nuevoMensaje)
            deshabilitar()
            let seccionReiniciar=document.getElementById('reiniciar')
            seccionReiniciar.style.display='block'
        }else if(misVidas==0){
            let seccionMensajeganador=document.getElementById('mensaje_ganador')
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=`SE ACABO EL JUEGO PERDISTE`
            seccionMensajeganador.appendChild(nuevoMensaje)
            deshabilitar()
            let seccionReiniciar=document.getElementById('reiniciar')
            seccionReiniciar.style.display='block'
        }
    }
    revisarVidas()}

const reiniciarjuego=()=>{
    location.reload()
}

//es la funcion que se se debe de poner para que nos indique que se debe de hacer en todo el 
//documento html 

// se añade un addevent a toda la ventana para que cargue el juego
//y de esta forma poner el script en el head del html 
window.addEventListener("load",iniciarJuego)



