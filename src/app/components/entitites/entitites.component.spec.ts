import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntititesComponent } from './entitites.component';

describe('EntititesComponent', () => {
  let component: EntititesComponent;
  let fixture: ComponentFixture<EntititesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntititesComponent]
    });
    fixture = TestBed.createComponent(EntititesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
