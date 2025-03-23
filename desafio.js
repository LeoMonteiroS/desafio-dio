let nomeHeroi = "Kart"
let xpHeroi = 111100
let nivel = ""

switch(true){
    case xpHeroi < 1000:
        nivel = "Ferro"
        break
    case xpHeroi >= 1001 && xpHeroi < 2000:
        nivel = "Bronze"
        break
    case xpHeroi >=  2001 && xpHeroi < 5000:
        nivel = "Prata"
        break
    case xpHeroi >=  5001 && xpHeroi < 6000:
        nivel = "Ouro"
        break
    case xpHeroi >= 6001 && xpHeroi < 8000:
        nivel = "Platina"
        break
    case xpHeroi >=  8001 && xpHeroi < 9000:
        nivel = "Ascendente"
        break
    case xpHeroi >=  9001 && xpHeroi < 10000:
        nivel = "Imortal"
        break
    case xpHeroi > 100001:
        nivel = "Radiante"
        break
     default:
        nivel = "Desconhecido"

}

console.log("O " +nomeHeroi + " esta no nivel: " +nivel)
