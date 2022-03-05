import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

//import {Register} from '../shared/register';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


 //registerForm: FormGroup | undefined ;
 //register: Register | undefined;
 public signupFrom !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router:Router) { 
    
  }

  ngOnInit(): void {

    this.signupFrom = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      email: [''],
      password: ['']

    })

  }
  onSubmit(){
    this.http.post<any>("http://localhost:3000/register", this.signupFrom.value)
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => alert("Something went wrong!!"),
      complete: () => {
        alert("SignUp successful")
        this.signupFrom.reset();
        this.router.navigate(['Home']);
    }
  })

  }
hide=true;
  
  

  


}
