import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-widget',
  template: `
    <mat-tab-group>
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
  `,
})
export class TabsWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
