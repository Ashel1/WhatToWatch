import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   logincheck="";
   public loginForm !: FormGroup
   public showPassword: boolean = false;
  constructor(public dialogRef: MatDialogRef<LoginComponent> ,private formBuilder : FormBuilder, private http :HttpClient, private router:Router, private data:DataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    })
    this.data.currentlogincheck.subscribe(logincheck=>this.logincheck=logincheck);
  }

  login() {
      this.http.post<any>("http://localhost:3000/signin", this.loginForm.value)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => alert("Something went wrong!!"),
        complete: () => {alert("Login Success");
        this.loginForm.reset();
        this.dialogRef.close();
        this.router.navigate(['Question1'])
        this.data.changeLoginCheck('Logged');
      }
    })
    }
  /*this.http.get<any>("http://localhost:3000/signin")
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
  })*/

  //}
  hide = true;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  goToSignUp(page:string):void{
    this.router.navigate([`${page}`]);
  }


}
