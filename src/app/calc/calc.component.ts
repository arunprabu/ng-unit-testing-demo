import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [],
  template: `
    <h2>
      My Calculator
    </h2>
  `,
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  add(a: number, b: number){
    return a + b;
  }
}
