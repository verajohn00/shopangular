import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

    public carrito: any[] = []; 
    public elemento: any; 
    private data = [];  
    public totalCarrito = 0.0;

    constructor() { }

    setOption(producto, cantidad) {
        
        var total = producto.precio*cantidad;
        this.totalCarrito += total;
        this.data.push({"p":producto,"pedido":cantidad,"total":total});  
    }  

    getOption() {  
        return this.data;  
    }     
}
