import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDescComponent } from './items-desc.component';

describe('ItemsDescComponent', () => {
  let component: ItemsDescComponent;
  let fixture: ComponentFixture<ItemsDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
