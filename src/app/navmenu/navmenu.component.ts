import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

    public contador = 0;

    constructor(private shop: CarritoService) { 
        this.contador = this.shop.getOption().length;
    }

    ngOnInit() {
    
    }
        
    verproductos(){
        //this.flagProductos = true;
        //this.elementoView = false;
    }

}
