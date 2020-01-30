import { NgModule } from '@angular/core';
import { RemoteComponentComponent } from './remote-component.component';
import { RemoteServicesService } from 'remote-services';
import { CommunicateServices } from 'remote-services'


@NgModule({
  declarations: [RemoteComponentComponent],
  imports: [
  ],
  exports: [RemoteComponentComponent]
})
export class RemoteComponentModule { }
