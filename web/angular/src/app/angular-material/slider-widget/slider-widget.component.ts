import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-widget',
  template: `<mat-slider min="1" max="100" step="1" value="1"></mat-slider>`,
})
export class SliderWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
