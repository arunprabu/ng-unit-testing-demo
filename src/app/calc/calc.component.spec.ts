import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance; // taking up component ts for testing
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test case 
  it("has add method with performs addition properly", () => {
    expect(component.add(1, 2)).toEqual(3);
    expect(component.add(6, 5)).toEqual(11);
  });

  it("has heading 2 with My Calculator text", () => {
    const htmlTemplate = fixture.nativeElement as HTMLElement;
    expect(htmlTemplate.querySelector("h2")?.textContent).toContain("Calculator");
  })
});
