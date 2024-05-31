//crear una clase que se llame mokepon y que a partir de esa clase se generen id, nombre y ataques
//los ataques seran un array de objetos con nombre y id
class Mokepon {
    constructor(nombre,id) {
        this.nombre = nombre
        this.id = id
        this.ataques = []
    }
}

//crear un mokepon que se llame pikacu y que tenga un id de 1, los ataques se ponen mas adelante
const pikachu = new Mokepon('Pikachu', 1)


//crear un array de objetos que representen los ataques de pikachu
const pikachuAtaques=[
    {nombre: 'Chispazo',id: 1}, 
    {nombre: 'Puño de piedra',id: 2}]
    
    //agregar los ataques al mokepon
pikachu.ataques.push(...pikachuAtaques)
