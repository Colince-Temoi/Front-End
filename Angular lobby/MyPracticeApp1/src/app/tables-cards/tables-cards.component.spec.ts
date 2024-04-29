import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCardsComponent } from './tables-cards.component';

describe('TablesCardsComponent', () => {
  let component: TablesCardsComponent;
  let fixture: ComponentFixture<TablesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablesCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
