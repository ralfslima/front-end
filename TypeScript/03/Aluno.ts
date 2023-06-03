import { Padrao } from "./Padrao";

export class Aluno implements Padrao{

    // Atributos
    nome: string;
    nota1: number;
    nota2: number;

    // Construtor
    constructor(nome:string, nota1:number, nota2:number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;

        this.mensagem();
    }

    // Método de média
    private media():number{
        return (this.nota1+this.nota2)/2;
    }

    // Método de situação
    private situacao():string{
        return this.media() >= 7 ? 'Aprovado' : 'Reprovado';
    }

    // Método de mensagem
    private mensagem():void{
        
        // Realizar a média
        let media = this.media();

        // Realizar a situação
        let situacao = this.situacao();

        // Exibir mensagem
        console.log(situacao + ' com média ' + media);
    }

}