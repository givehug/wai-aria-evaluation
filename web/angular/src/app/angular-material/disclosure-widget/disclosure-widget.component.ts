import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclosure-widget',
  template: `
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title> This is the expansion title </mat-panel-title>
        <mat-panel-description>
          This is a summary of the content
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>This is the primary content of the panel.</p>
    </mat-expansion-panel>
  `,
})
export class DisclosureWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
