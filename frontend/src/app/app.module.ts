import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatListModule } from '@angular/material/list'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import{MatCardModule}from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { SignupComponent } from './signup/signup.component';
import 'hammerjs';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { AboutComponent } from './about/about.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieRecommendComponent } from './movie-recommend/movie-recommend.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ShowmovieComponent } from './showmovie/showmovie.component';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    Question1Component,
    Question2Component, 
    SignupComponent, ContactComponent,
    SignupComponent, Question3Component, Question4Component, Question5Component, Question6Component, AboutComponent, MovieRecommendComponent, SpinnerComponent, ShowmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule, 
    MatInputModule,
    HttpClientModule ,
    MatCheckboxModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatDialog,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    HttpClientModule
    
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  LoginComponent]
                 
})
export class AppModule { }
