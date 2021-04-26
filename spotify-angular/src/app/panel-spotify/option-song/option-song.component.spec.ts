import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSongComponent } from './option-song.component';

describe('OptionSongComponent', () => {
  let component: OptionSongComponent;
  let fixture: ComponentFixture<OptionSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
