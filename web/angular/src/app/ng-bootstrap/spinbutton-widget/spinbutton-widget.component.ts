import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinbutton-widget',
  template: '<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>',
})
export class SpinbuttonWidgetComponent implements OnInit {
  time = { hour: 13, minute: 30 };

  constructor() {}

  ngOnInit(): void {}
}
