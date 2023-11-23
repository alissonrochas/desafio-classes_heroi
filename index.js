class hero{

    constructor(name, age, type){
        this.nomeDoHeroi = name
        this.idadeDoHeroi = age
        this.tipoDoHeroi = type
    }
    atacar(){

        if(this.tipoDoHeroi == "mago"){
            this.attack = "magia"
        } else if(this.tipoDoHeroi == "guerreiro"){
            this.attack = "espada"
        } else if(this.tipoDoHeroi == "monge"){
            this.attack = "artes marciais"
        } else if(this.tipoDoHeroi == "ninja"){
            this.attack = "shuriken"
        } else{
            this.attack = "sorte"        }

        console.log(`o ${this.tipoDoHeroi} atacou usando ${this.attack}`)
    }

}

let heroiMago = new hero("José", "586", "mago")
let heroiGuerreiro = new hero("Gabriel", "38", "guerreiro")
let heroiMonge = new hero("Celso", "89", "monge")
let heroiNinja = new hero("Jack", "23", "ninja")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()