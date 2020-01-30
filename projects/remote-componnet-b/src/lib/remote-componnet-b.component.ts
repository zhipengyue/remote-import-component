import { Component, OnInit } from '@angular/core';
import { RemoteServicesService } from 'remote-services';
import { CommunicateServices } from 'remote-services'
@Component({
  selector: 'lib-remote-componnet-b',
  template: `
    <p>
      remote-componnet-b works!<br>
      remoteService's value:{{remoteService.value}}<br>
      communicateService's value:{{communicateService.value}}<br>
    </p>
  `,
  styles: []
})
export class RemoteComponnetBComponent implements OnInit {

  constructor(
    public remoteService:RemoteServicesService,
    public communicateService:CommunicateServices
  ) { }

  ngOnInit() {
  }

}
