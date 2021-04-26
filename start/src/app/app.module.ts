import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './intermedio/users/users.component';
import { UserComponent } from './intermedio/users/user.component';
import { IncrementComponent } from './intermedio/increment/increment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    IncrementComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
