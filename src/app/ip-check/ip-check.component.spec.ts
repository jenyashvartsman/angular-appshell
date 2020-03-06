import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCheckComponent } from './ip-check.component';

describe('IpCheckComponent', () => {
  let component: IpCheckComponent;
  let fixture: ComponentFixture<IpCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
