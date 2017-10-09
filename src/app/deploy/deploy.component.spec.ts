import { TestBed, async } from '@angular/core/testing';
import { DeployComponent } from './deploy.component';

describe('DeployComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeployComponent
      ],
    }).compileComponents();
  }));
  it('should show a button to deploy a process', async(() => {
    const fixture = TestBed.createComponent(DeployComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button#deploy-process').textContent).toContain('Deploy Process');
  }));
});
