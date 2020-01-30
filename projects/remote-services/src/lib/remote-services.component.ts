import { Component, OnInit } from '@angular/core';
import { CommunicateServices } from './communicate-services.service';
@Component({
  selector: 'lib-remote-services',
  template: `
    <p>
      remote-services works!<br>
      communicateService'value:{{communicateService.value}}<br>
      /////////
    </p>
  `,
  styles: []
})
export class RemoteServicesComponent implements OnInit {

  constructor(
    public communicateService:CommunicateServices
  ) { }

  ngOnInit() {
  }

}
