import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytodoappComponent } from './mytodoapp.component';

describe('MytodoappComponent', () => {
  let component: MytodoappComponent;
  let fixture: ComponentFixture<MytodoappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytodoappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytodoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
