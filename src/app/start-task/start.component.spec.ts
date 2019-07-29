import {async, TestBed} from '@angular/core/testing';
import {StartComponent} from './start.component';
import {StartService} from './start.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('StartProcessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule],
      providers: [StartService]
    }).compileComponents();
  }));
  it('should show a button to start a workflow', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#start-process').textContent).toContain('Start Process');
  }));
});
