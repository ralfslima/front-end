import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Pg1Component } from './paginas/pg1/pg1.component';
import { TopoComponent } from './topo/topo.component';
import { Pg2Component } from './paginas/pg2/pg2.component';
import { Pg3Component } from './paginas/pg3/pg3.component';
import { Pg4Component } from './paginas/pg4/pg4.component';
import { Pg5Component } from './paginas/pg5/pg5.component';
import { Pg6Component } from './paginas/pg6/pg6.component';
import { Pg404Component } from './paginas/pg404/pg404.component';

@NgModule({
  declarations: [
    AppComponent,
    Pg1Component,
    TopoComponent,
    Pg2Component,
    Pg404Component,
    Pg3Component,
    Pg4Component,
    Pg5Component,
    Pg6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
