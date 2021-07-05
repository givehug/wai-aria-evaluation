import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-widget',
  template: `
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
  `,
})
export class ButtonWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
