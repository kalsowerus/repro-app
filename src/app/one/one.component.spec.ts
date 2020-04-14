import { Component, OnInit } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { TestComponent } from '../test/test.component';
import { TestModule } from '../test/test.module';
import { OneComponent } from './one.component';

@Component({
  selector: 'app-test',
  template: ''
})
class MockTestComponent implements OnInit {
  ngOnInit(): void {
    console.log('mock');
  }
}

describe('OneComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneComponent],
      imports: [AppModule]
    }).overrideModule(TestModule, {
      remove: {
        declarations: [TestComponent],
        exports: [TestComponent]
      },
      add: {
        declarations: [MockTestComponent],
        exports: [MockTestComponent]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
