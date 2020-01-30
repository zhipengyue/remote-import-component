import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteServicesComponent } from './remote-services.component';

describe('RemoteServicesComponent', () => {
  let component: RemoteServicesComponent;
  let fixture: ComponentFixture<RemoteServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
