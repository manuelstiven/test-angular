import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonProvider } from './providers/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PersonProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
