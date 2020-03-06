import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IpApiService } from './ip-check/service/ip-api.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { IpCheckComponent } from './ip-check/ip-check.component';

@NgModule({
  declarations: [
    AppComponent,
    IpCheckComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [HttpClient, IpApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
