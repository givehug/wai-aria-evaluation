import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-widget',
  template: `
    <button
      type="button"
      class="btn btn-outline-secondary mr-2"
      placement="top"
      ngbTooltip="Tooltip on top"
    >
      Tooltip on top
    </button>
  `,
})
export class TooltipWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
