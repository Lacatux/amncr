import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WipIndexComponent } from './wip-index.component';

describe('WipIndexComponent', () => {
  let component: WipIndexComponent;
  let fixture: ComponentFixture<WipIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WipIndexComponent]
    });
    fixture = TestBed.createComponent(WipIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
