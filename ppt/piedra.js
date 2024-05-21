
const matriz=["piedra","papel", "tijera"]

const azar=()=>{
    let numero= Math.floor(Math.random()*3)
    return numero
}

const juego=()=>{
    let yo=0
    let tu=0
    let empate=0
    let esta=false
    while(yo<3&&tu<3&&empate<3){
        player=prompt("escoge entre piedra, papel o tijera")
        let compu=matriz[azar()]
        if(player=="papel"||player=="tijera"|| player=="piedra"){
            if(player==compu){
                alert('empate')
                empate++
            }else if(player=="piedra" && compu=="tijera"){
                alert(`ganaste porque la compu escogio ${compu}` )
                yo++}
            else if(player=="papel" && compu=="piedra"){
                alert(`ganaste, porque la compu escogio ${compu}`)
                yo++}
            else if(player=="tijera" && compu=="papel"){
                alert(`ganaste, porque la compu escogió ${compu}`)
                yo++}
            else{
                alert(`perdiste, porque la compu escogio ${compu}`)
                tu++}
            alert(`marcador yo ${yo}, compu ${tu}, empates ${empate}`)
        }else{
            alert("escribe 1")
        }
    }
    if(yo===3){
        alert("ganaste")
    }else if(tu===3){
        alert("te gane")
    }else{
        alert("quedamos empate, otra?")
    }
}

juego()