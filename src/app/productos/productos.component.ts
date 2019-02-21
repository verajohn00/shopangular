import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

    constructor(private http : HttpService) {
        this.getProductos();
    }

    getProductos(){

        this.http.getDatos()
            .subscribe(
                data => {
                    let aux: any[] = [];
                    //for(let key in data){
                    //    aux.push(key.id)
                    //}
                    //this.usuarios = aux;
                    console.log(data);
                }
            )
        //return this.usuarios
    }
}
