import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTodosComponent } from './print-todos.component';

describe('PrintTodosComponent', () => {
  let component: PrintTodosComponent;
  let fixture: ComponentFixture<PrintTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
