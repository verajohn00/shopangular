import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

    public carrito: any[] = []; 
  public data;  
  
    constructor(private http : HttpService) {
        this.http.currentMessage.subscribe(carrito => this.carrito = carrito);
        this.data = this.http.getOption();
        console.log(this.data);
    }

    ngOnInit() {
       
    }

}
