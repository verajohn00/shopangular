import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  public carrito: any[] = []; 
  public elemento: any; 
  private data = {};  

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  
  constructor(private http : HttpClient) { }
  
  changeMessage(message: any[]) {
    this.messageSource.next(message)
  }

    
  
    setOption(option, value) {      
       this.data[option] = value;  
     }  

     getOption() {  
       return this.data;  
     }  
      
  getDatos(){
        const httpOptions = {
            headers: new HttpHeaders({ 
                'Access-Control-Allow-Origin':'*',
                'Content-Type':'json'
            })
        };
        
        //return this.http.get('http://localhost/Api/Api/productos',httpOptions);
        return this.http.get('http://xatsaautopartes.xyz/Api/api/productos',httpOptions);
            //.map((response: Response) => response.json());
    }
}
