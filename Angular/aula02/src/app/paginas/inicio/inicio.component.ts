import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  // Objeto para manipular o formulário
  obj:any = {nome:'', senha:''}

  // Construtor
  constructor(private servico:LoginService, private rota:Router){}

  // Função para efetuar o login
  logar():void{
    this.servico.autenticar(this.obj)
    .subscribe({
      next: retorno => {
        localStorage.setItem('token', retorno.token);
        this.rota.navigateByUrl('/admin');
      },
      error: retorno => alert(retorno.error.mensagem)
    });
  }

}


