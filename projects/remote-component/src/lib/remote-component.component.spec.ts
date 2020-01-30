import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteComponentComponent } from './remote-component.component';

describe('RemoteComponentComponent', () => {
  let component: RemoteComponentComponent;
  let fixture: ComponentFixture<RemoteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
