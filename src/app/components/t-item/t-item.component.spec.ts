import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TItemComponent } from './t-item.component';

describe('TItemComponent', () => {
  let component: TItemComponent;
  let fixture: ComponentFixture<TItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
