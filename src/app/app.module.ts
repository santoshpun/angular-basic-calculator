import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorService } from './service/calculator.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
