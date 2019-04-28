import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatIconModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,MatIconModule,
 ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
