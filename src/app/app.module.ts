import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
//import { BooksModule } from './modules/books/books.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'; 
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import { EmployeeComponent } from './employee/employee.component'; 
import {MatButtonModule} from '@angular/material/button';


// MDB Angular Free


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    CdkScrollableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
