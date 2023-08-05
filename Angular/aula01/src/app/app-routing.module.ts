import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pg1Component } from './paginas/pg1/pg1.component';
import { Pg2Component } from './paginas/pg2/pg2.component';
import { Pg3Component } from './paginas/pg3/pg3.component';
import { Pg4Component } from './paginas/pg4/pg4.component';
import { Pg5Component } from './paginas/pg5/pg5.component';
import { Pg404Component } from './paginas/pg404/pg404.component';
import { Pg6Component } from './paginas/pg6/pg6.component';

const routes: Routes = [
  {path:'pg1', component: Pg1Component},
  {path:'pg2', component: Pg2Component},
  {path:'pg3', component: Pg3Component},
  {path:'pg4', component: Pg4Component},
  {path:'pg5', component: Pg5Component},
  {path:'pg6', component: Pg6Component},
  {path:'', redirectTo:'/pg1', pathMatch:'full'},
  {path:'**', component: Pg404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
