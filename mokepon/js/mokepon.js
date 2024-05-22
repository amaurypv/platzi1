//para seleccionar el boton de seleccion mascota
const seleccionMascota=document.getElementById('boton_mascota')
//selecciona el boton enemigo con id selecion_enemigo
const botonEnemigo=document.getElementById('selecion_enemigo')
//se agregan todos los botones de los ataques
const botonAgua=document.getElementById('boton_agua')
const botonFuego=document.getElementById('boton_fuego')
const botonTierra=document.getElementById('boton_tierra')
const botonBatalla=document.getElementById('selecion_ataque_enemigo')
const botonReiniciar=document.getElementById('boton_reiniciar')
const seccionSeleccionAtaque=document.getElementById('seleccion_ataque')
const seccionEnemigo=document.getElementById('enemigo')
const seccionMarcador=document.getElementById('marcador')
const seccionMensajes=document.getElementById('mensajes')
const seccionReiniciar=document.getElementById('reiniciar')
const seccionAtaqueEnemigo=document.getElementById('ataque_enemigo')

//se selecciona la seccion completa de seleccion mascota
const seccionSelccionMascota=document.getElementById('seleccion_mascota')
//para seleccionar los elementos que se guardaron en el html por nombre de 
//id  se usa document.getElementById('el ida que se puso')  
//se define una variable que va a ser la que queremos que se ponga 
//en un span cuando se haga click con el boton
const nombre_mascota=document.getElementById('mascota_jugador')

//se define el id de ataque para que se inserte en el span de la seccion seleccion_ataque
const ataqueSeleccionado=document.getElementById('ataque')
const mensajeAtaque=document.getElementById('mensaje_ataque')

const nombreJugador1=document.getElementById('nombre_jugador1')
const nombreContrincante=document.getElementById('nombre_contrincante')

const spanMisVidas=document.getElementById('mis_vidas')
const spanVidasEnemigo=document.getElementById('vidas_enemigo')

const divContrincante=document.getElementById('contrincante')
const divJugador1=document.getElementById('jugador1')

const seccionMensajeganador=document.getElementById('mensaje_ganador')

/*para poder agregar de forma sistematica primero se crea un constructor de clases como el que se
se genero mas abajo, luego se van agregando los mokepones de forma manual de acuerdo a las caracteristicas
que se tiene en las tarjetas mismas que nos van a servir para agregarlas de forma sistematica
posteriormente se va a borrar en el archivo html la seccion de seleccion de mascotas
porlo que primero se define la division existente que tenia la clase mascotas con un nuevo id 
llamado div_seleccion_mascota y se define una nueva variable que es la va que a contener las 
caracteristicas tal y como se pusieron en hmtl */ 
const divSeleccionMascota=document.getElementById('div_seleccion_mascota')
let nuevoMokepon

let ataqueJugador
let ataqueAzarEnemigo
let jugada
let misVidas=3
let vidasEnemigo=3

let mascotaEnemigo=document.getElementById('mascota_enemigo')

//como no reconoce las variables del input porque originalmente no estan en el html 
//se van a definir como let ya que se va a cambiar el valor  en la funcion for each
let inputHipodoge=document.getElementById('hipodoge')
let inputCapipepo=document.getElementById('capipepo')
let inputRatiguya=document.getElementById('ratiguya')
let inputLangostelvis=document.getElementById('langostelvis')
let inputTucapalma=document.getElementById('tucapalma')
let inputPydos=document.getElementById('pydos')


//se va a generar una clase llamada Mokepon que nos genere mokepones que debe de contener
//nombre, imagen del mokepon que se toma desde el html y vidas
//se va a agregar tambien un campo para ataques que contenga un array
class Mokepon{
    constructor(nombre,imagen,vidas){
        this.nombre=nombre
        this.imagen=imagen
        this.vidas=vidas
        this.ataques=[]
    }
}

//ya que generamos la clase ahora vamos a generar un objeto con el nombre de cada uno de los 
//mokepones que tenemos en html 
let hipodoge=new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp',5)
//para comprobar si se guardo de forma correcta se puede enviar un console.log
//console.log(hipodoge)
let capipepo=new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratiguya=new Mokepon('ratiguya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
let langostelvis=new Mokepon('langostelvis', './assets/Corphish-Pokemon-PNG.png', 5)
let tucapalma=new Mokepon('tucapalma', './assets/y3s277X.png',5)
let pydos=new Mokepon('pydos', './assets/Artwork_Charizard_UNITE.png', 5)

//se va a agregar de manera manual los ataques a cada uno de los mokepones
//hipodoge es de agua por eso debe de tener 3 ataques de agua
hipodoge.ataques.push(
    {nombre:'💧', id:'boton_agua'},  //se pone como id, el id del boton con que se identifico el ataque
    {nombre:'💧', id:'boton_agua'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌿', id:'boton _tierra'}
)
//capipepo es de tierra, por lo que debe de tener 3 ataques de tierra
capipepo.ataques.push(
    {nombre:'🌿', id:'boton _tierra'},
    {nombre:'🌿', id:'boton _tierra'},
    {nombre:'🌿', id:'boton _tierra'},
    {nombre:'💧', id:'boton_agua'},
    {nombre:'🔥', id:'boton_fuego'},
)

ratiguya.ataques.push(
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🔥', id:'boton_fuego'},
    {nombre:'🌿', id:'boton _tierra'},
    {nombre:'💧', id:'boton_agua'},
)

//se va a generar un arreglo que se llame mokepones y se van a guardar los mokepones existentes 
let mokepones=[]
mokepones.push(hipodoge,capipepo,ratiguya,langostelvis,tucapalma,pydos)

//se define una variable global llamada ataque jugador que va a cambiar su valor dependiendo del boton de ataque que se presione
const iniciarJuego=()=>{
    //para darle la accion al boton de mascota cuando haga click y que debe de hacer
    seleccionMascota.addEventListener("click",seleccionDeMascota)
    //se agrega un listener que al hacer click, haga algo
    botonEnemigo.addEventListener("click", accionBotonEnemigo) 
    //cada boton debe de tener su listener
    botonAgua.addEventListener('click',ataqueAgua)    
    botonFuego.addEventListener('click',ataqueFuego)    
    botonTierra.addEventListener('click',ataqueTierra)    
    botonBatalla.addEventListener('click',batalla)    
    botonReiniciar.addEventListener('click',reiniciarjuego)   
    //hacer que la seccion no se vea se pone style.display='none'
    seccionSeleccionAtaque.style.display='none' 
    seccionEnemigo.style.display='none'    
    seccionMarcador.style.display='none'    
    seccionMensajes.style.display='none'    
    seccionReiniciar.style.display='none'    
    seccionAtaqueEnemigo.style.display='none'

    mokepones.forEach((mokepon)=>{
        nuevoMokepon=
        `<input  class="seleccioninput" type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta_mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.imagen} alt=${mokepon.nombre}>
        </label>`

        divSeleccionMascota.innerHTML += nuevoMokepon
        // se cambia el valor de las variables arriba definidas
        inputHipodoge=document.getElementById('hipodoge')
        inputCapipepo=document.getElementById('capipepo')
        inputRatiguya=document.getElementById('ratiguya')
        inputLangostelvis=document.getElementById('langostelvis')
        inputTucapalma=document.getElementById('tucapalma')
        inputPydos=document.getElementById('pydos')

    })
}

//se debe de generar una funcion en la que se indique que debe de hacer el boton
//cuando se haga click esta funcion se debe de poner en el addEventListener
const seleccionDeMascota=()=>{
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
    seccionSeleccionAtaque.style.display='flex'
    seccionSelccionMascota.style.display='none'

    
}

//se definen las funciones que se quiere que se haga cada vez que se haga click en cada uno de los botones de ataque
const ataqueFuego=()=>{
    ataqueJugador='Fuego 🔥'
    ataqueSeleccionado.innerHTML=ataqueJugador
    seccionEnemigo.style.display='block'
    mensajeAtaque.style.display='block' 
}

const ataqueAgua=()=>{
    ataqueJugador='Agua 💧'
    ataqueSeleccionado.innerHTML=ataqueJugador
    //hacer que aparezca la seccion que se tenia escondida.
    //se pone style.display='block'
    seccionEnemigo.style.display='block'  
    mensajeAtaque.style.display='block'
}

const ataqueTierra=()=>{
    ataqueJugador='Tierra 🌿'    
    ataqueSeleccionado.innerHTML=ataqueJugador
    seccionEnemigo.style.display='block' 
    mensajeAtaque.style.display='block'
}

//lo que queremos que haga cada vez que se accione el boton seleccion enemigo
const accionBotonEnemigo=()=>{
    
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
    
    mascotaEnemigo.innerHTML=enemigo_azar()   

    //poner que aparezca la seccion batalla

    seccionAtaqueEnemigo.style.display='block'
   
    //seccionMarcador.style.display='block'
    
    nombreJugador1.style.display='flex'
    nombreContrincante.style.display='flex'
}

const batalla=()=>{
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
    let nuevoMensaje=document.createElement('p')
    nuevoMensaje.innerHTML=` tu mascota ataco con ${ataqueJugador}, tu enemigo atacó con ${ataqueAzarEnemigo}, por lo tanto         ${resultado}`
    seccionMensajes.appendChild(nuevoMensaje)
    spanMisVidas.innerHTML=misVidas
    spanVidasEnemigo.innerHTML=vidasEnemigo

    const revisarVidas=()=>{
        const deshabilitar=()=>{
            
            //hacer que un boton se apague, es decir que no se pueda hacer click
            botonBatalla.disabled=true
        }
        if(vidasEnemigo ==0){
           
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=` SE ACABO EL JUEGO, GANASTE`
            seccionMensajeganador.appendChild(nuevoMensaje)
            deshabilitar()
            
            seccionReiniciar.style.display='flex'
        }else if(misVidas==0){
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=`SE ACABO EL JUEGO PERDISTE`
            seccionMensajeganador.appendChild(nuevoMensaje)
            deshabilitar()
            seccionReiniciar.style.display='flex'
        }
    }
    revisarVidas()

    let ataqueJugador1=document.createElement('p')
    let ataqueContrincante=document.createElement('p')
    ataqueJugador1.innerHTML=ataqueJugador
    ataqueContrincante.innerHTML=ataqueAzarEnemigo
    divJugador1.appendChild(ataqueJugador1)
    divContrincante.appendChild(ataqueContrincante)
    

}

const reiniciarjuego=()=>{
    location.reload()
}

//es la funcion que se se debe de poner para que nos indique que se debe de hacer en todo el 
//documento html 

// se añade un addevent a toda la ventana para que cargue el juego
//y de esta forma poner el script en el head del html 
window.addEventListener("load",iniciarJuego)



