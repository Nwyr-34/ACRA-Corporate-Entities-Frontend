import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntityComponent } from './create-entity.component';

describe('CreateEntityComponent', () => {
  let component: CreateEntityComponent;
  let fixture: ComponentFixture<CreateEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEntityComponent]
    });
    fixture = TestBed.createComponent(CreateEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
