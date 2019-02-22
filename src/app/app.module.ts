import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpService } from './http.service';
import { CarritoService } from './carrito.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FilterPipe } from './filter.pipe';
    
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    LoginComponent,
    VistaProductoComponent,
    CarritoComponent,
    NavmenuComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,HttpService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
