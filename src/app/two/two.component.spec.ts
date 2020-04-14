import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { TwoComponent } from './two.component';

describe('TwoComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwoComponent],
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
