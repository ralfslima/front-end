import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicos/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private servico:LoginService, private rota:Router){}

  ngOnInit(){
    this.servico.validarToken()
    .subscribe({
      next: retorno => localStorage.setItem('token', retorno.token),
      error: () => { 
        alert('Efetue o login novamente'); 
        this.rota.navigateByUrl('/inicio'); 
      }
    });

    // Caso o cliente fique na página por 1 minuto, será efetuado o logoff
    setTimeout(() => {
        localStorage.removeItem('token');
        alert('Efetue o login novamente'); 
        this.rota.navigateByUrl('/inicio');
    }, 60000)
  }

  sair():void{
    localStorage.removeItem('token');
    this.rota.navigateByUrl('/inicio');
  }

}
