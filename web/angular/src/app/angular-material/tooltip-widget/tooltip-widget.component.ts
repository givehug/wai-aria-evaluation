import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-widget',
  template: `
    <button
      mat-raised-button
      matTooltip="Info about the action"
      aria-label="Button that displays a tooltip when focused or hovered over"
    >
      Action
    </button>
  `,
})
export class TooltipWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
