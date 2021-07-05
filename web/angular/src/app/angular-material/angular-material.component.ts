import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: [
    '../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
    '../widget-template/widget-template.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AngularMaterialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
