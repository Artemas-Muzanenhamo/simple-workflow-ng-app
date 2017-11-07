import {async, TestBed} from '@angular/core/testing';
import {ViewComponent} from './view.component';
import {ViewService} from './view.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

describe( 'ViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [ViewService]
    }).compileComponents();
  }));
  it('should show a table with 6 rows', async( () => {
    const fixture = TestBed.createComponent(ViewComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('#task-view th').length).toBe(6);
  }));
});
