class naveEspacialAtaque  {
    constructor(nomeArma) {
        this.arma = nomeArma
        this.municaoRestante  = 3
    }

    atirar(){
        if(this.municaoRestante > 0){
            console.log("Bum!")
            this.municaoRestante--
        } else  {
            throw new Error(`Arma ${this.arma} sem munição!`)
        }
    }
}

let naveBatalha1 = new naveEspacialAtaque("Canhão de plasma")
naveBatalha1.atirar()
naveBatalha1.atirar()
naveBatalha1.atirar()
naveBatalha1.atirar()


console.log(naveBatalha1)