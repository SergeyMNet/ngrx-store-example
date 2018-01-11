import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { counter } from './reducer';
import { CounterService } from './services/counter.service';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      counter
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    CounterService
  ]
})
export class AppModule { }
