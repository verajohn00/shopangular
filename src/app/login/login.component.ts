import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Evaluación';
    showError = false;
    
    constructor(private http : HttpService,public router: Router) { }
  
    sendForm(form){

        this.http.validateLogin(form.value['email'],form.value['password'])
            .subscribe(
                data => {                    
                    console.log(data);
                    if(data){
                        this.router.navigate(["/productos"]);
                    }else{this.showError = true;}
                    
                }
            )        
    }

    hideAlert(){
        this.showError = false;
    }

    ngOnInit() {
    }

}
