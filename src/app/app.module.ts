import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConstellationListComponent } from './components/constellation-list/constellation-list.component';
import { ConstellationDetailComponent } from './components/constellation-detail/constellation-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConstellationListComponent,
    ConstellationDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
