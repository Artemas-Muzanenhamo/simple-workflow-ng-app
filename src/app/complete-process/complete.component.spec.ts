import {async, TestBed} from '@angular/core/testing';
import {CompleteComponent} from './complete.component';

describe('CompleteProcessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompleteComponent
      ],
    }).compileComponents();
  }));
  it('should show a button to complete a process', async(() => {
    const fixture = TestBed.createComponent(CompleteComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#complete-process').textContent).toContain('Complete Process');
  }));
})
