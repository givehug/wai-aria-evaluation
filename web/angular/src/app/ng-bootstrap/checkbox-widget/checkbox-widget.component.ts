import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-widget',
  template: `
    <div class="btn-group btn-group-toggle">
      <label class="btn-primary" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="model.left" /> Left
        (pre-checked)
      </label>
      <label class="btn-primary" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="model.middle" /> Middle
      </label>
      <label class="btn-primary" ngbButtonLabel>
        <input type="checkbox" ngbButton [(ngModel)]="model.right" /> Right
      </label>
    </div>
  `,
})
export class CheckboxWidgetComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
