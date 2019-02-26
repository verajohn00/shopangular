import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
 
    //public url = 'http://xatsaautopartes.xyz/Api'; 
    public url = 'http://localhost/Api'; 
 
  constructor(private http : HttpClient) { }    
      
  getDatos(){
        const httpOptions = {
            headers: new HttpHeaders({ 
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'json'
            })
        };
        
        return this.http.get(this.url+"/api/productos",httpOptions);
            //.map((response: Response) => response.json());
    }
    
    validateLogin(correo,pass){
        console.log(correo);
        console.log(pass);

        const params = new HttpParams()
        .set('correo', correo)
        .set('pass', pass);        
    
        const httpOptions = {
            headers: new HttpHeaders({ 
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'json'
            }),
            params: JSON.stringify(params),
        };
        
        console.log((httpOptions));
        
        return this.http.post(this.url+"/api/validate", httpOptions);
    }
    
    finishCart(data){

        const params = new HttpParams()
        .set('carrito', data);
    
        console.log(JSON.stringify(params));
    
        const httpOptions = {
            headers: new HttpHeaders({ 
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'json'
            }),
            params: JSON.stringify(params),
        };

        
        return this.http.post(this.url+"/api/finishCart", httpOptions);
    }
}
