import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

    public data;  
    public total; 
  
    constructor(private shop: CarritoService) {
        this.data = this.shop.getOption();
        this.total = this.shop.totalCarrito;
        
        console.log(this.data);
    }

    ngOnInit() {
       
    }
}
