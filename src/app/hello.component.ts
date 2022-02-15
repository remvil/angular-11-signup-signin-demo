import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>🚀</h1>
    <button mat-raised-button color="accent" routerLink="/login">
      Authenticate
    </button>
  `,
  styles: [
    `
      h1 {
        font-size: 5rem;
        margin-bottom: 10px;
      }
      :host {
        text-align: center;
        display: block;
      }
    `
  ]
})
export class HelloComponent {}
