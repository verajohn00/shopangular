import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

    public elemento: any;
  
    constructor(private http : HttpService) {
        console.log(this.http.carrito);
    }

  ngOnInit() {
       this.elemento = this.http.elemento;
  }
  
    onDestroy(){
        //this.elemento = any;
    }
}
