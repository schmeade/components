import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmAdditionComponent } from './mm-addition.component';

describe('MmAdditionComponent', () => {
  let component: MmAdditionComponent;
  let fixture: ComponentFixture<MmAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MmAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
