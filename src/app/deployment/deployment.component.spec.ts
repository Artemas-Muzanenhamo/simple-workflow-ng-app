import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentComponent } from './deployment.component';
import {DeploymentService} from './deployment.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DeploymentComponent', () => {
  let component: DeploymentComponent;
  let fixture: ComponentFixture<DeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentComponent ],
      providers: [
        DeploymentService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
