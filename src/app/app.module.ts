import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FieldComponent } from './component/field/field.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
