import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteTaskComponent } from './update-delete-task.component';

describe('UpdateDeleteTaskComponent', () => {
  let component: UpdateDeleteTaskComponent;
  let fixture: ComponentFixture<UpdateDeleteTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
