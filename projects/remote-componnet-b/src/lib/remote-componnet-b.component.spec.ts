import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteComponnetBComponent } from './remote-componnet-b.component';

describe('RemoteComponnetBComponent', () => {
  let component: RemoteComponnetBComponent;
  let fixture: ComponentFixture<RemoteComponnetBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteComponnetBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteComponnetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
