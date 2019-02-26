import { Injectable,Input,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
    
    @Output() fire: EventEmitter<any> = new EventEmitter();
    public elemento: any; 
    private data = [];  
    public totalCarrito = 0.0;

    constructor() { }

    setOption(producto, cantidad) {
        
        var total = producto.precio*cantidad;
        this.totalCarrito += total;
        this.data.push({"p":producto,"pedido":cantidad,"total":total});  
        this.fire.emit(this.data);
    }  

    getOption() {  
        return this.data;  
    }    
        
    getEmittedValue() {
        return this.fire;
    } 
    
    destroyOption(){
        this.data = [];
    }
}
