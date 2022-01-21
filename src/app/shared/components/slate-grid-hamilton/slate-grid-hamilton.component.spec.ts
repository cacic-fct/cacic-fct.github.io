import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlateGridHamiltonComponent } from './slate-grid-hamilton.component';

describe('SlateGridComponent', () => {
  let component: SlateGridHamiltonComponent;
  let fixture: ComponentFixture<SlateGridHamiltonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SlateGridHamiltonComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(SlateGridHamiltonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
