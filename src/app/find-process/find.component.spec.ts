import {async, TestBed} from '@angular/core/testing';
import {FindComponent} from './find.component';

describe('FindProcessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FindComponent
      ],
    }).compileComponents();
  }));
  it('should show a button to find a process', async(() => {
    const fixture = TestBed.createComponent(FindComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#find-process').textContent).toContain('Find Process');
  }));
})
