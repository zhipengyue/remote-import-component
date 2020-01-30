import { NgModule } from '@angular/core';
import { RemoteServicesComponent } from './remote-services.component';
import { CommunicateServices } from './communicate-services.service';


@NgModule({
  declarations: [RemoteServicesComponent],
  imports: [
  ],
  providers:[RemoteServicesComponent,CommunicateServices],
  exports: [RemoteServicesComponent]
})
export class RemoteServicesModule { 
  static service=CommunicateServices;
}
