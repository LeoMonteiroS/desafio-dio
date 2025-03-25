function calculoRank (vitoria, derrota){
    return vitoria - derrota
}


let saldo = calculoRank(100, 32)
let nivel = ''

switch(true){
    case saldo <= 10:
        nivel = "Ferro"
        break
    case saldo >= 11 && saldo <= 20:
        nivel = "Bronze"
        break
    case saldo >=  21 && saldo <= 30:
        nivel = "Prata"
        break
    case saldo >=  31 && saldo <= 50:
        nivel = "Ouro"
        break
    case saldo >= 51 && saldo <= 60:
        nivel = "Platina"
        break
    case saldo >= 61 && saldo <= 70:
        nivel = "Ascendente"
        break
    case saldo >= 71 && saldo <= 90:
        nivel = "Imortal"
        break
    case saldo >= 91:
        nivel = "Radiante"
        break
     default:
        nivel = "Desconhecido"
}

console.log('O Herói tem de saldo de ' + saldo + ' e está no nível: ' + nivel)


