import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../widget-template/widget-template.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgBootstrapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
