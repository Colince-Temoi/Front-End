import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesLobbyComponent } from './pipes-lobby.component';

describe('PipesLobbyComponent', () => {
  let component: PipesLobbyComponent;
  let fixture: ComponentFixture<PipesLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesLobbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
