/*# 3️⃣ Escrevendo as classes de um Jogo
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/
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