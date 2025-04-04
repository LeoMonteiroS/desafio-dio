class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque =''
        if(this.tipo === 'Guerreiro'){
            ataque = 'espada'
        } else if(this.tipo === 'Mago'){
            ataque = 'magia'
        } else if (this.tipo === 'Monge'){
            ataque = 'artes marciais'
        } else if (this.tipo === 'Ninja'){
            ataque = "shuriquen"
        } else{
            ataque = 'ataque desconhecido'
        }
     
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let primeiroHeroi = new heroi('Dunkler', 19, 'Guerreiro')
let segundoHeroi = new heroi('Mago Negro', 23, 'Mago')
let terceiroHeroi = new heroi('Baidu',100, 'Monge')
let quartoHeroi = new heroi('Taishi', 36, 'Ninja')

segundoHeroi.atacar()
console.log('-----------------------------------')
primeiroHeroi.atacar()
console.log('-----------------------------------')
quartoHeroi.atacar()
console.log('-----------------------------------')
terceiroHeroi.atacar()
console.log('-----------------------------------')
