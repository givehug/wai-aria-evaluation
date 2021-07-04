import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-bootstrap',
  template: `
    <div>
      <app-accordion-widget></app-accordion-widget>
    </div>
  `,
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NgBootstrapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
