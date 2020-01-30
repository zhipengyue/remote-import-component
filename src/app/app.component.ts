import { Component,OnInit,NgModuleFactoryLoader,SystemJsNgModuleLoader,Injector,NgModuleFactory, ViewChild, ViewContainerRef} from '@angular/core';
import { RemoteloadService } from './remoteload.service';
import { CommunicateServices } from 'remote-services'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'import-library';
  @ViewChild('container',{read:ViewContainerRef,static:false}) container;
  constructor(
    private loader: SystemJsNgModuleLoader, private injector: Injector,
    private remoteLoad:RemoteloadService,
    // private communicateService:CommunicateServices
  ){

  }
  async ngOnInit(){

    // this.loader.load('/remotemoudle/remote-component.umd.min.js#RemoteComponentModule')
    //   .then((factory: NgModuleFactory<any>) => {
    //       const moduleRef = factory.create(this.injector);
    //     const eps: any = moduleRef.injector.get((<any>factory.moduleType).eps);

    //     eps.startMyFunction();
    //   });
    let services_config=this.remoteLoad.getPath('remote-services');
    let services_module:any=await this.remoteLoad.loadComponent(services_config);
    let services_component=this.container.createComponent(services_module).instance;
    services_component.communicateService.value='set servcies service value'
    // let communicateService=(services_module.service);
    // communicateService.value='123'
    
    // services_instance.communicateService=this.communicateService;
    /////
    let componentA:any=await this.loadComponent('remote-component');
    let componentA_copy:any=await this.loadComponent('remote-component');
    let componentB:any=await this.loadComponent('remote-componnet-b');
    // componentA['__proto__']['alert']('ok') //方法调用

    componentA.communicateService.value='set componentA service value'
    // component_instance.communicateService.value='set by load component';
    // services_module.service.value='abcdefg'

    // remote-componnet-b
    // console.log(component_instance)
  }
  async loadComponent(name:string){
    return new Promise(async (success,failed)=>{
      let component_config=this.remoteLoad.getPath(name);
      let component_factory:any=await this.remoteLoad.loadComponent(component_config);
      let component=this.container.createComponent(component_factory);
      let instance=component.instance;
      success(instance)
    })
    
  }
}

