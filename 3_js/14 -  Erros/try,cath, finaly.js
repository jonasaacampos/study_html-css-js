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

    recarregar(){
        this.municaoRestante = 3
    }
}

let naveBatalha1 = new naveEspacialAtaque("Canhão de plasma")

try{
    naveBatalha1.atirar()
    naveBatalha1.atirar()
    naveBatalha1.atirar()
    naveBatalha1.atirar()
} catch (e) {
    console.log(e.message)
        naveBatalha1.recarregar()
} finally {
    console.log("Aguarde Carregamento de munição...")
}



console.log(naveBatalha1)