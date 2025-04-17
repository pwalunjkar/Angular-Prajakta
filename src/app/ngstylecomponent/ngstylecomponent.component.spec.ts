import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylecomponentComponent } from './ngstylecomponent.component';

describe('NgstylecomponentComponent', () => {
  let component: NgstylecomponentComponent;
  let fixture: ComponentFixture<NgstylecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgstylecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstylecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
