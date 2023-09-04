import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonService } from './services/common.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
