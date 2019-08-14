import {async, TestBed} from '@angular/core/testing';
import {StartTaskComponent} from './start-task.component';
import {StartTaskService} from './start-task.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('StartProcessComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartTaskComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule],
      providers: [StartTaskService]
    }).compileComponents();
  }));
  it('should show a button to start a workflow', async(() => {
    const fixture = TestBed.createComponent(StartTaskComponent);
    const compiled = fixture.debugElement.nativeElement;
  }));
});
