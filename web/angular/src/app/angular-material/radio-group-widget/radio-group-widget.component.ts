import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group-widget',
  template: `
    <mat-radio-group aria-label="Select an option">
      <mat-radio-button value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>
  `,
})
export class RadioGroupWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
