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
    public utlLocal = "";

    constructor(private shop : CarritoService,private http : HttpService) {
        //console.log(this.shop.carrito);
        this.utlLocal = http.url;
    }

    ngOnInit() {
       this.elemento = this.shop.elemento;
    }
  
    onDestroy(){
        //this.elemento = any;
    }
    

}
