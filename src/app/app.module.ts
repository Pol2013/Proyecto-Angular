import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

 
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
