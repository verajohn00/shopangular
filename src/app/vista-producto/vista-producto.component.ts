import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

    public elemento: any;
  
    constructor(private shop : CarritoService) {
        console.log(this.shop.carrito);
    }

    ngOnInit() {
       this.elemento = this.shop.elemento;
    }
  
    onDestroy(){
        //this.elemento = any;
    }
}
