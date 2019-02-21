import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
    {path: 'productos',component:ProductosComponent},
    {path: '',component:LoginComponent},
    {path: 'vista-producto',component:VistaProductoComponent},
    {path: 'carrito',component:CarritoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
