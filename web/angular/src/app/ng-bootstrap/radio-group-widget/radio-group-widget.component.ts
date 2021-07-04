import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group-widget',
  template: `
    <div
      class="btn-group btn-group-toggle"
      ngbRadioGroup
      name="radioBasic"
      [(ngModel)]="model"
    >
      <label ngbButtonLabel class="btn-primary">
        <input ngbButton type="radio" [value]="1" /> Left (pre-checked)
      </label>
      <label ngbButtonLabel class="btn-primary">
        <input ngbButton type="radio" value="middle" /> Middle
      </label>
      <label ngbButtonLabel class="btn-primary">
        <input ngbButton type="radio" [value]="false" /> Right
      </label>
    </div>
  `,
})
export class RadioGroupWidgetComponent implements OnInit {
  model = 1;

  constructor() {}

  ngOnInit(): void {}
}
