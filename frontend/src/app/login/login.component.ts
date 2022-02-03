import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
   public loginForm !: FormGroup
  constructor(public dialogRef: MatDialogRef<LoginComponent> ,private formBuilder : FormBuilder, private http :HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      
    })
    
  }
  login() {
  
  this.http.get<any>("http://localhost:3000/SignupUsers")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
    });
    if(user){
      alert("Login Success");
      this.loginForm.reset();
      this.dialogRef.close();
      this.router.navigate(['Question1'])
    }
    else{
      alert("user not found");
    }
  },err=>{
    alert("Something went wrong!!")
  })

  }

  goToSignUp(page:string):void{
    this.router.navigate([`${page}`]);
  }


}
