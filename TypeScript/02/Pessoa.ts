export class Pessoa{

    // Atributos
    private nome:string;
    private idade:number;
    private trabalho:boolean;

    // Construtor
    constructor(nome:string, idade:number, trabalho:boolean){
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;

        this.mensagem();
    }

    // Método
    private mensagem() {
        console.log('O nome informado é ' + this.nome);    
        console.log('A idade informada é ' + this.idade);    
        console.log(this.trabalho == true ? 'Está trabalhando' : 'Não está trabalhando');    
    }

}