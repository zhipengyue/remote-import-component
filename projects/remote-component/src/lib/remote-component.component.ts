import { Component, OnInit } from '@angular/core';
import { RemoteServicesService } from 'remote-services';
import { CommunicateServices } from 'remote-services'
@Component({
  selector: 'lib-remote-component',
  template: `
    <p>
      remote-component works!<br>
      remoteService:{{remoteService.value}}<br>
      communicateService:{{communicateService.value}}
    </p>
  `,
  styles: []
})
export class RemoteComponentComponent implements OnInit {

  constructor(
    public remoteService:RemoteServicesService,
    public communicateService:CommunicateServices
  ) { }

  ngOnInit() {
  }
  public alert(str){
    alert(str)
  }
}
