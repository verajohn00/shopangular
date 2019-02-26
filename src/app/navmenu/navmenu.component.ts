import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

    public contador = 0;
    private data = [];

    constructor(private shop: CarritoService) { 
    }

    ngOnInit() {
        console.log("init navmenu");
        this.shop.getEmittedValue()
            .subscribe(item => this.contador = item.length);
    }
        
    verproductos(){
        //this.flagProductos = true;
        //this.elementoView = false;
    }

}
