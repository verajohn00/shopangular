import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CarritoService } from '../carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

    public data;  
    public total; 
    public utlLocal = "";
  
    constructor(private shop: CarritoService,private http : HttpService,public router: Router) {
        this.data = this.shop.getOption();
        this.total = this.shop.totalCarrito;
        this.utlLocal = http.url;
    
        console.log(this.data);
    }

    ngOnInit() {
       
    }
    
    cancelarCompra(){
        this.shop.destroyOption();
        this.router.navigate(["/productos"]);
    }
    
    pagarCompra(){
        this.http.finishCart(this.data)
            .subscribe(
                data => {                    
                    console.log(data);
                    if(data){
                        this.shop.destroyOption();
                        this.router.navigate(["/productos"]);
                    }else{
                        //this.showError = true;
                    }                    
                }
            )
    }    
}
