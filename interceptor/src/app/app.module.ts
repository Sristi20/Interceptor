import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SelfComponent } from './self/self.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthenticationInterceptor} from './AuthenticationInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SelfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor ,
    multi: true
  } ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
