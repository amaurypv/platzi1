const matriz=["piedra","papel", "tijera"]
let pasto='si'
let esta=false
for(let i=0;i<matriz.length;i++){
    if(pasto==matriz[i]){
        esta=true
    }
}

if(esta){
console.log('si esta')
}else{
    console.log('no esta')
}