import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-widget',
  template: `
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>
  `,
})
export class MenuWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
