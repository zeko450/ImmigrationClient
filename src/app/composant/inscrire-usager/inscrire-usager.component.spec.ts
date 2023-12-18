import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireUsagerComponent } from './inscrire-usager.component';

describe('InscrireUsagerComponent', () => {
  let component: InscrireUsagerComponent;
  let fixture: ComponentFixture<InscrireUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscrireUsagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscrireUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
