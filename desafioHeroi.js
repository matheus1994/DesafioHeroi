class Heroi{

    constructor(nome, idade, tipo){
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo;
    }

    atacar(){
        if(this.tipo == "mago"){
            print("o " + this.tipo + " atacou usando magia");
        }

        else if(this.tipo == "guerreiro"){
            print("o " + this.tipo + " atacou usando espada");
        }

        else if(this.tipo == "monge"){
            print("o " + this.tipo + " atacou usando artes maciais");
        }

        else if(this.tipo == "ninja"){
            print("o " + this.tipo + " atacou usando shuriken");
        }
    }

}