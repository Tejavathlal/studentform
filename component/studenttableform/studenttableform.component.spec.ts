import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttableformComponent } from './studenttableform.component';

describe('StudenttableformComponent', () => {
  let component: StudenttableformComponent;
  let fixture: ComponentFixture<StudenttableformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudenttableformComponent]
    });
    fixture = TestBed.createComponent(StudenttableformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
