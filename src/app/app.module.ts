import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteComponentModule } from 'remote-component';
import { RemoteServicesModule } from 'remote-services';
import { SystemJsNgModuleLoader,NgModuleFactoryLoader } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemoteComponentModule,
    RemoteServicesModule
  ],
  providers: [
    SystemJsNgModuleLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
