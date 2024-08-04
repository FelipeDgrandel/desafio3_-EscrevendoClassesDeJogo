class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
   atacar(){
        if (this.tipo === "mago"){
            console.log (" O Mago atacou usadon Magia")
        } else if (this.tipo === "guerreiro"){
            console.log("O Guerreira atacou usando Espada")
        } else if (this.tipo === "monge"){
            console.log ("O Monge atacou usando Artes marciais")
        }else if (this.tipo === "ninja"){
            console.log("O Ninja atacou usando uma Shuriken")
        }
    }
}
let hero1 = new Heroi("zé",25 ,"mago")
let hero2 = new Heroi("Jão", 23, "ninja")


console.log(`Nome do heroi ${hero1.nome}`)
console.log(`Idade ${hero1.idade}`)
console.log(`Tipo do heroi ${hero1.tipo}`)
 hero1.atacar()

 console.log(`Nome do heroi ${hero2.nome}`)
console.log(`Idade ${hero2.idade}`)
console.log(`Tipo do heroi ${hero2.tipo}`)
 hero2.atacar()
