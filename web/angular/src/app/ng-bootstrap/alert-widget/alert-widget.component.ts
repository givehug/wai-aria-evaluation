import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-widget',
  template: '<ngb-alert type="danger">danger alert</ngb-alert>',
})
export class AlertWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
