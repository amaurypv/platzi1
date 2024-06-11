//para seleccionar el boton de seleccion mascota
const seleccionMascota=document.getElementById('boton_mascota')
//selecciona el boton enemigo con id selecion_enemigo
const botonEnemigo=document.getElementById('selecion_enemigo')
//se agregan todos los botones de los ataques
let botonAgua=document.getElementById('boton_agua')
let botonFuego=document.getElementById('boton_fuego')
let botonTierra=document.getElementById('boton_tierra')
const botonBatalla=document.getElementById('selecion_ataque_enemigo')
const botonReiniciar=document.getElementById('boton_reiniciar')
const seccionSeleccionAtaque=document.getElementById('seleccion_ataque')
const seccionEnemigo=document.getElementById('enemigo')
const seccionMarcador=document.getElementById('marcador')
const seccionMensajes=document.getElementById('mensajes')
const seccionReiniciar=document.getElementById('reiniciar')
const seccionAtaqueEnemigo=document.getElementById('ataque_enemigo')
//no se habia creado la variable para la seccion caja_mensaje. 
const seccionCajaMensaje=document.getElementById('caja_mensaje')
//se define la variable para el boton de ataque
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

//se va a definir el div con el id de los botones de ataque
const botonesAtaque=document.getElementById('botones_ataque')
//y se definirá una nueva variable llamada ataque. 
let ataquesDeMokepon 
let ataqueMokepon
// y otra variable que contenga el nombre del mokepon seleccionado 
let mokeponSeleccionado

const nombreJugador1=document.getElementById('nombre_jugador1')
const nombreContrincante=document.getElementById('nombre_contrincante')

const spanMisVidas=document.getElementById('mis_vidas')
const spanVidasEnemigo=document.getElementById('vidas_enemigo')

const divContrincante=document.getElementById('contrincante')
const divJugador1=document.getElementById('jugador1')

const seccionMensajeganador=document.getElementById('mensaje_ganador')


//con el canvas creado en html aqui vamos a definir ese elemento 
const seccionMapaCanvas=document.getElementById('mapa_canvas')
//tambien se define el elemento canvas con el id mapa
const mapa=document.getElementById('mapa')
//se tiene que definir una variable para tener el contexto del canvas
//con esto podemos dibujar sobre el canvas
const lienzo=mapa.getContext('2d')


/*para poder agregar de forma sistematica primero se crea un constructor de clases como el que se
se genero mas abajo, luego se van agregando los mokepones de forma manual de acuerdo a las caracteristicas
que se tiene en las tarjetas mismas que nos van a servir para agregarlas de forma sistematica
posteriormente se va a borrar en el archivo html la seccion de seleccion de mascotas
porlo que primero se define la division existente que tenia la clase mascotas con un nuevo id 
llamado div_seleccion_mascota y se define una nueva variable que es la va que a contener las 
caracteristicas tal y como se pusieron en hmtl */ 
const divSeleccionMascota=document.getElementById('div_seleccion_mascota')
let nuevoMokepon
let mascotaEnemigoSeleccionadaAzar
let ataquesDeMokeponEnemigo
let ataqueJugador
let ataqueAzarEnemigo
let jugada
let misVidas=0
let vidasEnemigo=0

let mascotaEnemigo=document.getElementById('mascota_enemigo')

//como no reconoce las variables del input porque originalmente no estan en el html 
//se van a definir como let ya que se va a cambiar el valor  en la funcion for each
let inputHipodoge
let inputCapipepo
let inputRatiguya
let inputLangostelvis
let inputTucapalma
let inputPydos
let claseBAtaque=[]
let contBotonesAtaque=[]
let contBotonesAtaqueEnemigo=[]

let ataqueJugador1
let ataqueContrincante

//se definen los id que son los que se agregan a 
let idJugador=null
let idEnemigo=null
//se crea una nueva variable que va a ser el mokepon elegido por el enemigo. 
let enemigoseleccionado=null


//se va a definir la ubicacion de la imagen de fondo del canvas
const fondoCanva= new Image()
fondoCanva.src='./assets/mokemap.png'

//se define el boton mover izquierda del canvas
//se va a generar una clase llamada Mokepon que nos genere mokepones que debe de contener
//nombre, imagen del mokepon que se toma desde el html y vidas
//se va a agregar tambien un campo para ataques que contenga un array
//para agregar enemigos al canvas, va a ser necesario modificar la clase y poner que se agregen los valores de x,y y la cara del mokepon
//se agrega el valor del id al constructor de clases.
class Mokepon{
    constructor(nombre,imagen,vidas,caramokepon, x=10,y=10, id=null){
        this.nombre=nombre
        this.imagen=imagen
        this.vidas=vidas
        this.ataques=[]
        this.id=id
        //se agregan datos para las imagenes en canvas
        this.x=x 
        this.y=y
        this.ancho=80
        this.alto=80
        this.imagenCanvas=new Image() //es importante generar el objeto imagen que es de donde va agarrar la imagen
        this.imagenCanvas.src=caramokepon
        //se va agregar una velocidad a los movimientos cuando el mouse se mantenga clickeado
        this.velocidadx=0
        this.velocidady=0
        //se va a agregar una funcion para agregar la cara del mokepon al canvas
        }
        insertarcara(){
            lienzo.drawImage(
                this.imagenCanvas,
                this.x,
                this.y,
                this.ancho,
                this.alto
            )
        }
    }


//ya que generamos la clase ahora vamos a generar un objeto con el nombre de cada uno de los 
//mokepones que tenemos en html 
let hipodoge=new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp',5,'./assets/carahipodoge.png')
//para comprobar si se guardo de forma correcta se puede enviar un console.log
//console.log(hipodoge)

let capipepo=new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.webp',5,'./assets/caracapipepo.png') //se va a modificar la cara de los mokepon para el canvas
let ratiguya=new Mokepon('ratiguya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5,'./assets/cararatigueya.png')
let langostelvis=new Mokepon('langostelvis', './assets/Corphish-Pokemon-PNG.png', 5)
let tucapalma=new Mokepon('tucapalma', './assets/y3s277X.png',5)
let pydos=new Mokepon('pydos', './assets/Artwork_Charizard_UNITE.png', 5)
//para que los enemigos que aparezcan en linea, se tienen que reconocer por su nombre, como enemigo. 
//por lo tanto se va a tener que borrar y generar solo los nombre de los mokepones


//se va a agregar de manera manual los ataques a cada uno de los mokepones
//hipodoge es de agua por eso debe de tener 3 ataques de agua

//como ya no se van a considerar mokpones con el nombre enemigos. se van a cambiar la forma de agregar los ataques
//se va a generar una variable con el nombre de los ataques de cada mokepon 

const ataques_hipodoge=[   
{nombre:'💧', id:'boton_agua'},  //se pone como id, el id del boton con que se identifico el ataque
{nombre:'💧', id:'boton_agua'},
{nombre:'💧', id:'boton_agua'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🌿', id:'boton_tierra'}]

//para agregarse a los ataques de cada mokepon y no se agreguen en forma de lista se agrean con los tres puntos
//para que haga un recorrido por toda la lista. 

hipodoge.ataques.push(...ataques_hipodoge)
//como ya no se va a considerar mokepones enemigos, se elimina los ataques de mokepon enemigos

//se hace el mismo procedimiento con los ataques de capipeo
const ataques_capipepo=[    
{nombre:'🌿', id:'boton_tierra'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'💧', id:'boton_agua'},
{nombre:'🔥', id:'boton_fuego'},]


//capipepo es de tierra, por lo que debe de tener 3 ataques de tierra
capipepo.ataques.push(...ataques_capipepo)
//se eliminan de igual forma los ataques de capipepo enemigo
//se hace lo mismo con los ataques de ratiguya
const ataques_ratiguya=[    
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'💧', id:'boton_agua'},]
ratiguya.ataques.push(...ataques_ratiguya)


const ataques_langostelvis=[    
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'💧', id:'boton_agua'}]


const ataques_tucapalma=[
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'💧', id:'boton_agua'}]

const ataques_pydos=[
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🔥', id:'boton_fuego'},
{nombre:'🌿', id:'boton_tierra'},
{nombre:'💧', id:'boton_agua'}
]

//se va a generar un arreglo que se llame mokepones y se van a guardar los mokepones existentes 
let mokepones=[]
//solo se van a poner los 3 primeros mokepones, se borraron los ultimos 3 
mokepones.push(hipodoge,capipepo,ratiguya)



//se define una variable global llamada ataque jugador que va a cambiar su valor dependiendo del boton de ataque que se presione
const iniciarJuego=()=>{
    //para darle la accion al boton de mascota cuando haga click y que debe de hacer
    seleccionMascota.addEventListener("click",seleccionDeMascota)
    //se agrega un listener que al hacer click, haga algo
    //botonEnemigo.addEventListener("click", accionBotonEnemigo) 
    //cada boton debe de tener su listener  
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
        nuevoMokepon= //fuente de verdad
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

    //se va a poner los botones de cada uno de los ataques dependiendo del mokepon que se selecciono
    //para eso se va a repetir el proceso de hacer un recorrido por todos los mokepones
    //hasta hacerlo coincidir con el mokepon seleccionado.
    //primero se selcciona el div con el id en html que contiene los botones de ataques. 
    //esta variable se define junto con las variables universales () 

    /*a partir de la pagina http://localhost:8080/jugador se va a obtener un dato y se tiene que 
    imprimir en la consola usando la funcion fetch*/
    
    fetch('http://localhost:8080/jugador') //se hace el fetch a la direccion que tenemos en express
    .then(response=>{ //siempre despues de un fetch se tiene que hacer un .then(funcion())
                    //en este caso se pone response como variable
        if(response.ok){ //se comprueba si el resultado de response.ok es true
                        //esto se puede ver tambien poniendo console.log(response)
            response.text() // si response.ok es true manda otra promesa y por lo tanto 
                            //hay que hacer lo mismo que el primer fetch hacer otro .then()
                .then(data=>{ //se toma la variable data
                    console.log(data) //pedimos que se imprima en la consola la variable data
                    idJugador=data
                })
        }

    })

    //al iniciar el juego queremos que no sea vea aun la seccion del mapa por lo que tenemos que esconderal 
    seccionMapaCanvas.style.display='none'

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
    //se va cambiar la palabra puesta de forma manual 'hipodoge' que es el nombre del mokepon
    //se va a poner de forma sistematica si vemos la variable inputCapipepo es un objeto
    //entonces para acceder a el, podemos llamarlo inputCapipepo.id que es el nombre del mokepon
    //tal y como aparece en la variable que se definio con for each
        nombre_mascota.innerHTML=inputHipodoge.id 
        mokeponSeleccionado=inputHipodoge.id
    }else if(inputCapipepo.checked){
        nombre_mascota.innerHTML=inputCapipepo.id
        mokeponSeleccionado=inputCapipepo.id
    }else if(inputRatiguya.checked){
        nombre_mascota.innerHTML=inputRatiguya.id
        mokeponSeleccionado=inputRatiguya.id
    }else if(inputLangostelvis.checked){
        nombre_mascota.innerHTML=inputLangostelvis.id
        mokeponSeleccionado=inputLangostelvis.id
    }else if(inputTucapalma.checked){
        nombre_mascota.innerHTML=inputTucapalma.id
        mokeponSeleccionado=inputTucapalma.id
    }else if(inputPydos.checked){
        nombre_mascota.innerHTML=inputPydos.id
        mokeponSeleccionado=inputPydos.id
    }else{
        alert('selecciona uno')
    }

    //se esconde momentaneamente la seccion de seleccion de ataque y la caja de mensajes
    //y se muestra la del mapa
    seccionCajaMensaje.style.display='none'
    seccionMapaCanvas.style.display='flex' 
    
    accionesDeJuego()

    //en esta nueva sección vamos a empezar a trabajar con nuestro lienzo 
    //por ejemplo para poner un rectangulo dentro del canvas en la posicón 5,15 que sea 
    //20 pix de ancho y 40 px de alto   
    //lienzo.fillRect(5,15,20,40)

    //   se puede poner la imagen que seleccionemos usando una clase llamada Image y depsues seleccionar la imagen con.src
    // let imagenCapipepo=new Image()
    // imagenCapipepo.src=ratiguya.imagen
    // lienzo.drawImage( //drawImage es para insertar una imagen en canvas
    //     imagenCapipepo, //se selecciona primero la fuente de la imagen 
    //     90,  //posicion en x que va aparecer
    //     50, //posicion en y que s va aparecer
    //     80, //el largo de la imagen
    //     80 // el ancho de la imagen 
    // )

   pintarCanvas(objetoMokeponSeleccionado())


    //seccionSeleccionAtaque.style.display='flex'
    seccionSelccionMascota.style.display='none'

    //aqui se va a llamar la funcion enviarMascota() que se encarga de enviar el nombre de la mascota al servidor
    enviarMascota(mokeponSeleccionado)
    //se va a seleccionar tambien el enemigo, pero este de forma aleatoria. 

    
    //se elimina la seleccion al azar de los enemigos ya que el enemigo se va a seleccionar cuando se colisione con otro mokepon en el canvas


    /* para poner botones de ataque de forma automatica se hace el mismo procecidimiento que con las imagenes
    primero se hace un recorrido por todo el array de mokepones con foreach buscando el nombre
    del mokepon del array coincida con el del mokepon seleccionado
    una vez que se encuentra el mokepon, se define los ataques deben de ser los del mokepon 
    con la variable antes definida como ataqueDeMokepon 
    como ataquesDeMokepon es una array, tambien se tiene que hacer un recorrido por todo el 
    array y por cada elemento del array se va a definir el id y el nombre con la estructura que 
    se tiene de html 
    por ultimo y muy importante se tienen que actualizar las variables de los botones 
    asi como sus addEventListener*/ 
    mokepones.forEach((mokepon)=>{
        if(mokepon.nombre===mokeponSeleccionado){
            ataquesDeMokepon=mokepon.ataques
        }
    })
    
    // se selecciona los ataques de la mascota enemiga de acuerdo a su seleccion
    mokepones.forEach((mokepon)=>{
        if(mokepon.nombre===mascotaEnemigoSeleccionadaAzar){
            ataquesDeMokeponEnemigo=mokepon.ataques
        }else{
            console.log('no hay ataques')
        }
        
    })
    
    /* con las funciones que se pusieron, si se agregan los botones, pero los dos de en medio no tienen accion 
    lo que se va a hacer es 
    agregar una nueva clase a la clase existente dando solo un espacio y poniendo el nombre de la nueva clase para tener dos clases sin definirlas dos veces 
    despues hacer una funcion que guarde todos los botones generados (querySelectorAll() misma que se generó antes  pero solo como claseBAtaque=[]
    despues se va hacer una funcion que guarde los valores de cada boton que compare el textContent que tiene el elemento del boton 
    por lo que va a ser necesario generar una variable contBotonesAtaque que contenga los botones con esa misma clase
    */ 
   ataquesDeMokepon.forEach((ataque)=>{
       ataqueMokepon=
        `<button id=${ataque.id} class="boton_ataque BAtaque"> 
        <p>${ataque.nombre}</p>
        </button>`
        
        botonesAtaque.innerHTML += ataqueMokepon
        
    })
    
    botonAgua=document.getElementById('boton_agua')
    botonFuego=document.getElementById('boton_fuego')
    botonTierra=document.getElementById('boton_tierra')
    // botonAgua.addEventListener('click',ataqueAgua)    
    // botonFuego.addEventListener('click',ataqueFuego)    
    // botonTierra.addEventListener('click',ataqueTierra)  
    claseBAtaque=document.querySelectorAll('.BAtaque')

    /* esta es la funcion que se genero para recorrer por cada elemento de claseBAtaque y que se agregue el textcontext a una 
    nueva variable llamada contBotonesAtaque que se definió antes como  contBotonesAtaque=[] */
    const agregarAtaques=()=>{
        claseBAtaque.forEach((boton)=>{
            boton.addEventListener('click',(e)=>{
                if(e.target.textContent==' \n        💧\n        '){
                    contBotonesAtaque.push('Agua')
                    boton.style.background='grey'
                    console.log(contBotonesAtaque)
                    contBotonesAtaqueEnemigo.push(ataqueEnemigo())
                    console.log(contBotonesAtaqueEnemigo)
                    boton.disabled=true
                }else if(e.target.textContent==' \n        🔥\n        '){
                    contBotonesAtaque.push('Fuego')
                    boton.style.background='grey'
                    console.log(contBotonesAtaque)
                    contBotonesAtaqueEnemigo.push(ataqueEnemigo())
                    console.log(contBotonesAtaqueEnemigo)
                    boton.disabled=true
                }else{
                    contBotonesAtaque.push('Tierra')
                    boton.style.background='grey'
                    console.log(contBotonesAtaque)
                    contBotonesAtaqueEnemigo.push(ataqueEnemigo())
                    console.log(contBotonesAtaqueEnemigo)
                    boton.disabled=true
                }

                //se revisa si se cuenta con los 5 ataques y se envian los 5 ataques al servidor.
                if(contBotonesAtaque.length==5){
                    enviarAtaques()
                }   
            }
            )
        }
        )   
    }
    
    agregarAtaques()
    
    
    
    //Ahora se seleccionará el ataque al azar tomando en cuenta los ataques del mokepon
    
    /*para agregar los ataques del enemigo, primero debemos de saber cual es el enemigo que se seleccionó de manera random y
    vincularlos con sus ataques correspondientes.*/
    
}   

//se define la nueva funcion para poder hacer un post que se genero en el archivo index
const enviarMascota=(mokeponSeleccionado)=>{
    //se hace el fetch con los datos de como se puso el app.post '/mokepon/:idJugador'
    //donde idJugador es el id del jugador que se puso en el url mismo que se va a tomar de la variable 
    //idJugador que se definio en la linea 13 y que toma el valor a partir del app.get que se genero antes.
    fetch(`http://localhost:8080/mokepon/${idJugador}`, 
    //se abre una llave como segundo parametro y dentro de la llave van los siguientes valores
    //el primer valor es el metodo que se va a usar, en este caso es post
    {method:'post',
    // el segundo valor son los headers aqui se define el tipo de contenido que se va a poner por lo general se usa 'Content-Type': 'application/json'
    headers:{'Content-Type': 'application/json'},
    //el tercero es el body, si se va a usar un json se tiene que usar JSON.stringify({}) para convertir a json 
    body:JSON.stringify({mokepon:mokeponSeleccionado})
    })
}




const ataqueEnemigo=()=>{
    while(ataquesDeMokepon.length>0){
        const azar=()=>{
            return  Math.floor(Math.random()*ataquesDeMokepon.length) //la formula es Math.floor(Math.random()*numero de elementos de la lista 
        }
        if(ataquesDeMokepon[azar()].nombre=='🔥'){
            return 'Fuego'
        }else if(ataquesDeMokepon[azar()].nombre=='🌿'){
            return 'Tierra'
        }else{
            return 'Agua'
        }
        ataquesDeMokepon.splice(azar(),1)
    }
}

//se eliminan estas funciones porque las funciones a cada boton de ataque se dieron con la funcion agregarAtaques()

//se definen las funciones que se quiere que se haga cada vez que se haga click en cada uno de los botones de ataque
// const ataqueFuego=()=>{
//     ataqueJugador='Fuego 🔥'
//     ataqueSeleccionado.innerHTML=ataqueJugador
//     seccionEnemigo.style.display='block'
//     mensajeAtaque.style.display='block' 
    
// }

// const ataqueAgua=()=>{
//     ataqueJugador='Agua 💧'
//     ataqueSeleccionado.innerHTML=ataqueJugador
//     //hacer que aparezca la seccion que se tenia escondida.
//     //se pone style.display='block'
//     seccionEnemigo.style.display='block'  
//     mensajeAtaque.style.display='block'

// }

// const ataqueTierra=()=>{
//     ataqueJugador='Tierra 🌿'    
//     ataqueSeleccionado.innerHTML=ataqueJugador
//     seccionEnemigo.style.display='block' 
//     mensajeAtaque.style.display='block'
    
// }

//lo que queremos que haga cada vez que se accione el boton seleccion enemigo

const batalla=()=>{
    let resultado


    const juego=()=>{
        // if(ataqueJugador=='Fuego 🔥' && ataqueAzarEnemigo=='Tierra 🌿'){
        //     resultado='Ganaste'
        //     vidasEnemigo--
        // }else if(ataqueJugador=='Agua 💧' && ataqueAzarEnemigo=='Fuego 🔥'){
        //     resultado='Ganaste'
        //     vidasEnemigo--
        // }else if(ataqueJugador=='Tierra 🌿' && ataqueAzarEnemigo=='Agua 💧'){
        //     resultado='Ganaste'
        //     vidasEnemigo--
        // }else if(ataqueJugador==ataqueAzarEnemigo){
        //     resultado="Empate"
        // }else{
        //     resultado="Perdiste"
        //     misVidas --
        // }
    }
    /* se hace la logica en la que se compara cada elemento de los contenedores de los ataques seleccionados*/
    if(contBotonesAtaque.length===5){
        for(let i=0;i<contBotonesAtaque.length;i++){
            if(contBotonesAtaque[i]=='Fuego'&& contBotonesAtaqueEnemigo[i]=='Tierra'){
                resultado='Ganaste'
                misVidas++
            }else if(contBotonesAtaque[i]=='Agua'&& contBotonesAtaqueEnemigo[i]=='Fuego'){
                resultado='Ganaste'
                misVidas++
            }else if(contBotonesAtaque[i]=='Tierra'&& contBotonesAtaqueEnemigo[i]=='Agua'){
                resultado='Ganaste'
                misVidas++
            }else if(contBotonesAtaque[i]==contBotonesAtaqueEnemigo[i]){
                resultado="Empate"
            }else{
                resultado="Perdiste"
                vidasEnemigo ++
            }
            ataqueJugador=contBotonesAtaque[i]
            ataqueAzarEnemigo=contBotonesAtaqueEnemigo[i]

            ataqueJugador1=document.createElement('p')
            ataqueContrincante=document.createElement('p')
            ataqueJugador1.innerHTML=ataqueJugador
            ataqueContrincante.innerHTML=ataqueAzarEnemigo

            //dependiendo del resultado se agrega una clase a cada parrafo para cambiar el color del ataque que gano
            if (resultado === 'Ganaste') {
                ataqueJugador1.classList.add('ganaste');
            } else if (resultado === 'Perdiste') {
                ataqueContrincante.classList.add('perdiste');
            } else if (resultado === 'Empate') {
                ataqueJugador1.classList.add('empate');
                ataqueContrincante.classList.add('empate');
            }

            divJugador1.appendChild(ataqueJugador1)
            divContrincante.appendChild(ataqueContrincante)  
        }

        spanMisVidas.innerHTML=misVidas
        spanVidasEnemigo.innerHTML=vidasEnemigo
        seccionReiniciar.style.display='flex'
        botonBatalla.disabled=true

        if(misVidas>vidasEnemigo){
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=`Ganaste`
            seccionMensajeganador.appendChild(nuevoMensaje)
        }else if(misVidas<vidasEnemigo){
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=`Perdiste`
            seccionMensajeganador.appendChild(nuevoMensaje)
        }else if(misVidas==vidasEnemigo){
            let nuevoMensaje=document.createElement('p')
            nuevoMensaje.innerHTML=`Empate`
            seccionMensajeganador.appendChild(nuevoMensaje)
        }

    }else{
        alert('selecciona 5 ataques')
    }


    // let nuevoMensaje=document.createElement('p')
    // nuevoMensaje.innerHTML=` tu mascota ataco con ${ataqueJugador}, tu enemigo atacó con ${ataqueAzarEnemigo}, por lo tanto         ${resultado}`
    // seccionMensajes.appendChild(nuevoMensaje)
    // spanMisVidas.innerHTML=misVidas
    // spanVidasEnemigo.innerHTML=vidasEnemigo

    // const revisarVidas=()=>{
    //     const deshabilitar=()=>{
            
    //         //hacer que un boton se apague, es decir que no se pueda hacer click
    //         botonBatalla.disabled=true
    //     }
    //     if(vidasEnemigo ==0){
           
    //         let nuevoMensaje=document.createElement('p')
    //         nuevoMensaje.innerHTML=` SE ACABO EL JUEGO, GANASTE`
    //         seccionMensajeganador.appendChild(nuevoMensaje)
    //         deshabilitar()
            
    //         seccionReiniciar.style.display='flex'
    //     }else if(misVidas==0){
    //         let nuevoMensaje=document.createElement('p')
    //         nuevoMensaje.innerHTML=`SE ACABO EL JUEGO PERDISTE`
    //         seccionMensajeganador.appendChild(nuevoMensaje)
    //         deshabilitar()
    //         seccionReiniciar.style.display='flex'
    //     }
    // }
    // revisarVidas()

    

}

const reiniciarjuego=()=>{
    location.reload()
}

//se va generar una funcion para insertar una imagen en el canvas
function pintarCanvas(mokepon){
    //para que se mueva la imagen sin dejar rastro de la imagen anterior se tiene que borrar 
    lienzo.clearRect(0, 0, mapa.width, mapa.height) //se limpia todo el canvas
    //se insertara la imagen de fondo por lo que es necesario hacer otro drawImage pero ahora definiendo 
    //la imagen, que empieze desde 0 en x asi como en y, y de ancho y alto que sea igual al mapa
    lienzo.drawImage(
        fondoCanva,
        0,
        0,
        mapa.width,
        mapa.height)
//        enviarPosicion(mokepon)
    //se va a modificar la forma de insertar la cara del mokepon al canvas usando una funcion dentro de la clase
    mokepon.insertarcara()
    enviarPosicion(mokepon.x,mokepon.y)
    //se insertan los enemigos
    
    // como ya no estan definidos los enemigos, se eliminan tambien las funciones para dibujarlos

    
}
//se va a definir la funcion para que haga un fetch de un post y enviar las coordenadas.x y x 
//la funcion se va a poner en la funcion pintarCanvas ya que cada vez que se ejecute es decir que se se mueva el mokepon envie las coordenadas
function enviarPosicion(x,y){
    fetch(`http://localhost:8080/mokepon/${idJugador}/posicion`,{ //se escribe la direccion basada en el metodo post de index.js
        //se genera el segundo argumento con las caracteristicas de un metodo post
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,  // se pone x solita, es lo mismo que poner x:x
            y // lo mismo que x
        })
    }
    )
    //con esta parte se imprimen la lista de enemigos, es decir los mokepones con un id diferente al mio 
    .then(res=>{
        if(res.ok){
            res.json().then(({enemigos})=>{
                //con lo que envie la solicitud post (un objeto)
                //vamos a hacer un recorrido por todo el objeto buscando el nombre del mokepon elegido por el enemigo
                //para de esta forma dibujarlo en el canvas junto con las coordenadas.
                enemigos.forEach((enemigo)=>{
                    let mokeponEnemigo=enemigo.mokepon.nombre
                    if(mokeponEnemigo=='hipodoge'){
                        enemigoseleccionado=new Mokepon('hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp',5,'./assets/carahipodoge.png',50,200,enemigo.id)
                    }else if(mokeponEnemigo=='capipepo'){
                        enemigoseleccionado=new Mokepon('capipepo', './assets/mokepons_mokepon_capipepo_attack.webp',5,'./assets/caracapipepo.png',330,100,enemigo.id)
                    }else if(mokeponEnemigo=='ratiguya'){
                        enemigoseleccionado=new Mokepon('ratiguya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5,'./assets/cararatigueya.png',200,300, enemigo.id)
                    }

                    //se definen las coordendas x y y que se envia cada vez que se mueve el enemigo.    
                        enemigoseleccionado.x=enemigo.x
                        enemigoseleccionado.y=enemigo.y
                        enemigoseleccionado.insertarcara()

                })



                
            })
        }
    })


}

//se agrega la funcion que se indica en html moverDerecha
function moverDerecha (){
    //se va agregar una velocidad y se va a quitar insertar imagen ya que queremos que solo sea una vez que 
    //agregue el dibujo en el canvas
    objetoMokeponSeleccionado().x=objetoMokeponSeleccionado().x+5
    pintarCanvas(objetoMokeponSeleccionado())
    //cada vez que se mueva el mokepn revisar si hay colisión con algun enemigo
    //se va a cambiar la revisión de colision para solo buscar la colisión con los enemigos. 
    revisarColision(enemigoseleccionado)
    
    
}
//se agrega la funcion que se indica en html moverArriba
function moverArriba(){
    objetoMokeponSeleccionado().y=objetoMokeponSeleccionado().y - 5
    pintarCanvas(objetoMokeponSeleccionado())
       //cada vez que se mueva el mokepn revisar si hay colisión con algun enemigo
    revisarColision(enemigoseleccionado)
    
}
//se agrega la funcion que se indica en html moverIzquierda
function moverIzquierda(){
    objetoMokeponSeleccionado().x=objetoMokeponSeleccionado().x-5
    pintarCanvas(objetoMokeponSeleccionado())
    //cada vez que se mueva el mokepn revisar si hay colisión con algun enemigo
    revisarColision(enemigoseleccionado)
    
    
}
//se agrega la funcion que se indica en html moverAbajo
function moverAbajo(){
    objetoMokeponSeleccionado().y=objetoMokeponSeleccionado().y+5
    pintarCanvas(objetoMokeponSeleccionado())
    //cada vez que se mueva el mokepn revisar si hay colisión con algun enemigo
    revisarColision(enemigoseleccionado)
    
    
}

//se van a definir las funciones para que nos imprima que tecla se esta presionando 
function teclaAbajo(event){
     switch (event.key) {
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break

        default:
            break;
     } 
}


//se va a definir la funcion de los eventlistener para dejarlos todos afuera asi como el tamaño del mapa se va a agrandar
function accionesDeJuego(){
    //se va ampliar el area del mapa
    mapa.width=600
    mapa.height=500
     //se va agregar un addeventlistener en toda la ventana que nos indique que tecla fue la que se presiono 
     window.addEventListener('keydown',teclaAbajo)
     // y otra funcion para cuando se deja de presionar la tecla
     window.addEventListener('keyup', detenerMov)
     
}

//se va hacer una funcion para que devuelva el objeto del mokepon que se selccionó 
function objetoMokeponSeleccionado(){
    for(let i=0;i<mokepones.length;i++){
        if(mokepones[i].nombre==mokeponSeleccionado){
            return mokepones[i]
        }
    }
}

//para revisar si hay colisión es necesario revisar algunas condiciones con las posiciones entre los mokepones

function revisarColision(enemigo){
    const mokeponAbajo=objetoMokeponSeleccionado().y+objetoMokeponSeleccionado().alto
    const mokeponArriba=objetoMokeponSeleccionado().y
    const mokeponDerecha=objetoMokeponSeleccionado().x+objetoMokeponSeleccionado().ancho
    const mokeponIzquierda=objetoMokeponSeleccionado().x

    const enemigoAbajo=enemigo.y+enemigo.alto
    const enemigoArriba=enemigo.y
    const enemigoDerecha=enemigo.x+enemigo.ancho
    const enemigoIzquierda=enemigo.x

    if(
        mokeponAbajo<enemigoArriba||
        mokeponArriba>enemigoAbajo||
        mokeponDerecha<enemigoIzquierda||
        mokeponIzquierda>enemigoDerecha
    ){
        return
    }

    //en cuanto haya colisión con algun mokepon nos envia a la pantalla de batalla
    seccionAtaqueEnemigo.style.display='flex'
    seccionSeleccionAtaque.style.display='flex'
    seccionCajaMensaje.style.display='flex'
    seccionMapaCanvas.style.display='none'
    mascotaEnemigoSeleccionadaAzar=enemigo.nombre 
    mascotaEnemigo.innerHTML= mascotaEnemigoSeleccionadaAzar 
    idEnemigo=enemigo.id
    //se esconde momentaneamente la seccion del ataque enemigo 
    //seccionAtaqueEnemigo.style.display='none'
    nombreJugador1.style.display='flex'
    nombreContrincante.style.display='flex'

}

function detenerMov(){

}

const enviarAtaques=()=>{
    fetch(`http://localhost:8080/mokepon/${idJugador}/ataque`,{
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({ataque:contBotonesAtaque})
    })
}



//es la funcion que se se debe de poner para que nos indique que se debe de hacer en todo el 
//documento html 

// se añade un addevent a toda la ventana para que cargue el juego
//y de esta forma poner el script en el head del html 
window.addEventListener("load",iniciarJuego)



