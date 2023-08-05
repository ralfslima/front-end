import { Component } from '@angular/core';
import { Postagem } from 'src/app/modelo/Postagem';
import { PostagensService } from 'src/app/requisicoes/postagens.service';

@Component({
  selector: 'app-pg6',
  templateUrl: './pg6.component.html',
  styleUrls: ['./pg6.component.css']
})
export class Pg6Component {

  // Vetor
  vetor:Postagem[] = [];

  // Mensagem de falha
  msgFalha:boolean = false;

  // Construtor
  constructor(private requisicao:PostagensService){}

  // ngOnInit
  ngOnInit(){
    this.obterPostagens();
  }

  // Obter todas as postagens
  obterPostagens():void{
    this.requisicao.listar()
    .subscribe({
      next: retorno => { this.vetor = retorno },
      error: retorno => { this.msgFalha = true }
    });
  }

}











