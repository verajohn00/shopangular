import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarritoService } from '../carrito.service';
//import { NavmenuComponent } from './app/navmenu/navmenu.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

    public productos: any[] = [];
    public carrito: any[] = [];
    public flagProductos = false;
    public items: any[] = [];
    public cartTemp = 0;
    public elemento: any;
    public elementoView = false;
    public utlLocal = "";

    constructor(private http : HttpService, private shop: CarritoService) {
        this.productos = this.getProductos();
        this.utlLocal = http.url;
    }

    getProductos(){
        this.http.getDatos()
            .subscribe(
                data => {
                    let aux: any[] = [];
                    for(let key in data){
                        aux.push(data[key])
                    }
                    this.productos = aux;
                    this.flagProductos = true;
                    console.log(aux);
                }
            )

        return this.productos;
    }
    
    addProduct(id){    
        if(this.cartTemp > parseInt(this.productos[id].cantidad)){
            alert("No hay disponibilidad de productos.");
        }else{
            this.carrito.push([{"producto":this.productos[id],"cantidad":this.cartTemp}]);
            this.shop.setOption(this.productos[id],this.cartTemp);
            alert("Producto agregado al carrito.");
            //this.menu.contador = this.carrito.length;
        }
    }
    
    saveItem(value){
        this.cartTemp = value;
    }
    
    showDetalle(index){        
        this.shop.elemento = this.productos[index];
        this.elementoView = true;
        this.flagProductos = false;
    }    
    
    regresar(){
        this.elementoView = false;
        this.flagProductos = true;
    }
}
