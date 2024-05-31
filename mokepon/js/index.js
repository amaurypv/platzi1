//para empezar a trabajar con exprees es necesario importar la libreria
//y crear una instancia de express
const express=require('express')
//y crear una instancia de express que se llame app que es la forma mas comun
const app=express()
//se crea una ruta para el servidor
const port=8080
//se va a importar la libreria cors la cual sirve para permitir que el servidor sea accedido desde cualquier parte
const cors=require('cors')

//se usa la libreria cors para de esta forma permitir que el servidor sea accedido desde cualquier parte
// y no solo desde la maquina donde se esta ejecutando el servido
//podemos eliminar la linea de res.set()
app.use(cors())

// se va habilitar tambien recibir datos en formato json
app.use(express.json())

//se crea una lista de jugadores
//se genera una nueva constante llamada jugador que solo es una lista
const jugadores=[]

//generar un constructor de clase que guarde el id de cada jugador 
class Jugador{
    constructor(id){
    this.id=id}
    //se genera una funcion en la que se guarde el nombre del mokepon que se envio
    pokemonEnviado(mokepon){
        this.mokepon=mokepon
    }
}


/*ahora que ya se tiene el id se tiene que ligar el mokepon seleccionado con el id que se nos dio
para eso es necesario crear una nueva clase llamada mokepon en la que se guarde el nombre del mokepon 
y en la clase existente agregar una funcion que guarde el nombre del mokepon que se envio
*/

class Mokepon{
    constructor(nombre){
        this.nombre=nombre
    }
}


//hacer una pagina llamada jugador get que de un valor random y que se guarde en la lista de jugador
//el id debe de guardarse como un string no como un numero por lo que se tiene que usar `${}`
app.get('/jugador',(req,res)=>{
    //se genera el id de forma random y se convierte en string
    const id=`${Math.random()}`
    // con el valor del id se genera un nuevo objeto de la clase jugador
    const jugador=new Jugador(id)
    //se agrega el objeto jugador a la lista de jugadores
    jugadores.push(jugador)

    //permitir CORS (Cross-Origin Resource Sharing)
    //res.set('Access-Control-Allow-Origin', '*')

    //se envia el id del jugador
    res.send(id)
})

//crear una pagina en la que se muestre la lista de jugadores
app.get('/jugadores',(req, res)=>{
    res.send(jugadores)
})

// se va a crear una ruta para el servidor para post en el que se tenga el id del jugador como parametro en la url 
app.post('/mokepon/:idJugador',(req,res)=>{
    //para acceder al id del jugador desde la url usa params se usa req.params.idJugador
    const idJugador=req.params.idJugador
    //se obtiene el mokepon que se envio en el body de la peticion {}
    const nombre=req.body.mokepon
    //se genera un nuevo objeto de la clase mokepon con el nombre del mokepon que se envio en el body de la peticion
    let mokepon=new Mokepon(nombre)
    //se va a buscar la posición del id en la que se guardo en la lista jugadores para que a ese 
    //id se le asigne el nombre del mokepon que se envio en el body de la peticion
    //para eso primero se busca el indice del id en la lista jugadores y se define como indiceId
    let indiceId=jugadores.findIndex(indice=>indice.id===idJugador)
    //si es que el id esta en la lista tiene que enviar un numero igual o mayor a cero 
    //por lo tanto podemos saber cual es el id 
    if(indiceId>=0){
        //se agrega el nombre del mokepon al jugador en la posicion indiceId
        jugadores[indiceId].pokemonEnviado(mokepon)
    }

    //se imprime todos los jugadores guardados en la lista
    console.log(jugadores)
    //estos datos los obtendremos a partir del archivo de front end despues de elegir nuestra mascota
    res.end()
})

//para ejecutar el servidor es necesario poner el metodo listen
app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})

