import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Evaluación';
    showError = false;
    
    constructor() { }

  
    sendForm(form){
        console.log(form);
        console.log(form.value['email']);
        console.log(form.value['password']);

        this.showError = true;
    }

    ngOnInit() {
    }

}
