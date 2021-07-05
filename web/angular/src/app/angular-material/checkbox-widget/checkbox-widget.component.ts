import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-widget',
  template: `
    <mat-checkbox class="example-margin">Check me!</mat-checkbox>
    <mat-checkbox class="example-margin" [disabled]="true"
      >Disabled</mat-checkbox
    >
  `,
})
export class CheckboxWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
