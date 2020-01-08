import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeServiceComponent } from './see-service.component';

describe('SeeServiceComponent', () => {
  let component: SeeServiceComponent;
  let fixture: ComponentFixture<SeeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
