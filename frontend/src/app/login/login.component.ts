import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent> , public router:Router) { }

  ngOnInit(): void {

    
  }
  onSubmit() {
   console.log('User: ', this.user);
    this.dialogRef.close();
  }

  goToSignUp(page:string):void{
    this.router.navigate([`${page}`]);
  }


}
