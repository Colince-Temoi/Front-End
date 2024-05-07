import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormDemoComponent } from './template-driven-form-demo.component';

describe('TemplateDrivenFormDemoComponent', () => {
  let component: TemplateDrivenFormDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
