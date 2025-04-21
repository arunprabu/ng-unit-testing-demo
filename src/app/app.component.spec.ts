// Testing Pattern: Given, When, Then 

// load the necessary tools to test the sample 
import { TestBed } from "@angular/core/testing";
// loading the sample 
import { AppComponent } from "./app.component";

// Test Suite == group of related tests 
describe("App Component", () => {
  // setting up 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // loading the sample in to test bed
    }).compileComponents();
  });

  // tearing down
  
  // test cases / test specs or tests 
  it("has a variable title with value MyUnitTestingApp", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up the component ts for testing

    // assert 
    // must have at least one expect
    expect(app.title).toBe("MyUnitTestingApp");
  });

  // Let's test the component html 
  it("has heading 1 with Success! text", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appTemplate = fixture.nativeElement as HTMLElement; // taking up the HTML of the component for testing

    expect(appTemplate.querySelector("h1")?.innerText).toBe("Success!");
  });

})



