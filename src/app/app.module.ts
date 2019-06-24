import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './_components/top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StationComponent } from './_components/station/station.component';
import { StationsComponent } from './_components/stations/stations.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    StationComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
