import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifierUsagerComponent } from './authentifier-usager.component';

describe('AuthentifierUsagerComponent', () => {
  let component: AuthentifierUsagerComponent;
  let fixture: ComponentFixture<AuthentifierUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthentifierUsagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthentifierUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
