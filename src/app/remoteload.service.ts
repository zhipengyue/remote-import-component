import { Injectable,Compiler,Injector } from '@angular/core';
declare const SystemJS;
import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularCommonHttp from '@angular/common/http';
import * as angularForms from '@angular/forms';
import * as angularAnimations from '@angular/animations';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class RemoteloadService {

  constructor(
    private compiler: Compiler, 
    private injector: Injector
  ) { }

  getPath(name){
    return {
      'remote-component':{
        'url':'/remotemoudle/remote-component.umd.min.js',
        'moduleName':'RemoteComponentModule',
        'services':false
      },
      'remote-componnet-b':{
        'url':'/remotemoudle/remote-componnet-b.umd.min.js',
        'moduleName':'RemoteComponnetBModule',
        'services':false
      },
      'remote-services':{
        'url':'/remotemoudle/remote-services.umd.min.js',
        'moduleName':'RemoteServicesModule',
        'services':true
      }
    }[name]
  }
  async loadComponent(config:any){
    SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
    SystemJS.set('@angular/common/http', SystemJS.newModule(angularCommonHttp));
    SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
    SystemJS.set('@angular/animations', SystemJS.newModule(angularAnimations));
    SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));
    SystemJS.set('@angular/platform-browser-dynamic', SystemJS.newModule(angularPlatformBrowserDynamic));

    // now, import the new module
    return new Promise((sucess,faild)=>{
      SystemJS.import(config.url+'?id='+Math.random()*1000).then((module) => {
        this.compiler.compileModuleAndAllComponentsAsync(module[config.moduleName])
              .then((compiled) => {
                  let moduleRef = compiled.ngModuleFactory.create(this.injector);
                  let factory = compiled.componentFactories[0];
                  if (factory) {
                      // let component = this.vc.createComponent(factory);
                      // let instance = component.instance;
                      sucess(factory)
                  }
              });
      });
    })
    
  }
  async loadService(config:any){
    SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
    SystemJS.set('@angular/common/http', SystemJS.newModule(angularCommonHttp));
    SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
    SystemJS.set('@angular/animations', SystemJS.newModule(angularAnimations));
    SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));
    SystemJS.set('@angular/platform-browser-dynamic', SystemJS.newModule(angularPlatformBrowserDynamic));

    // now, import the new module
    return new Promise((sucess,faild)=>{
      SystemJS.import(config.url+'?id='+Math.random()*1000).then((module) => {
        console.log(module)
        // this.compiler.compileModuleAndAllComponentsAsync(module[config.moduleName])
        //       .then((compiled) => {
        //           let moduleRef = compiled.ngModuleFactory.create(this.injector);
        //           let factory = compiled.componentFactories[0];
        //           if (factory) {
        //               // let component = this.vc.createComponent(factory);
        //               // let instance = component.instance;
        //               sucess(factory)
        //           }
        //       });
        sucess(module[config.moduleName])
      });
    })
    
  }
}
