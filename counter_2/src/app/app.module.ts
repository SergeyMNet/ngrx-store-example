import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counter } from './reducer';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(counter)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
