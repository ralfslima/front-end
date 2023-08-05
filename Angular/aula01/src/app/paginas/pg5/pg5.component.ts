import { Component } from '@angular/core';
import { Pessoa } from 'src/app/modelo/Pessoa';

@Component({
  selector: 'app-pg5',
  templateUrl: './pg5.component.html',
  styleUrls: ['./pg5.component.css']
})
export class Pg5Component {

  // Objeto para trabalhar com o formulário
  pessoa = new Pessoa();

  // Vetor
  dados:Pessoa[] = [];

  // Método de inicialização
  ngOnInit(){
    
      // Obter o vetor no LocalStorage, caso não exista, retorna um objeto vazio
      this.dados = JSON.parse(localStorage.getItem('vetor') || '[]');
    
  }

  // Método de cadastro
  cadastrar():void{

    // Criar um novo objeto do tipo Pessoa
    let obj_temp = new Pessoa();

    // Copiar as informações do formulário
    obj_temp = {...this.pessoa};

    // Cadastrar no vetor
    this.dados.push(obj_temp);

    // Atualizar o LocalStorage
    localStorage.setItem('vetor', JSON.stringify(this.dados)); 

    // Limpar campos do formulário
    this.pessoa = new Pessoa();
  }

  // Método para remover
  remover(indice:number):void{

    // Remover a pessoa no índice informado
    this.dados.splice(indice, 1);
    
    // Atualizar o LocalStorage
    localStorage.setItem('vetor', JSON.stringify(this.dados)); 

  }



}
