import {async, TestBed} from '@angular/core/testing';
import {StartComponent} from './start.component';
import {StartService} from './start.service';
import {HttpModule} from '@angular/http';

describe('StartProcessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartComponent
      ],
      imports: [HttpModule],
      providers: [StartService]
    }).compileComponents();
  }));
  it('should show a button to start a workflow', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#start-process').textContent).toContain('Start Process');
  }));
});
