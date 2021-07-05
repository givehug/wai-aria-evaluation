import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-template',
  templateUrl: './empty-template.component.html',
  styleUrls: ['../widget-template/widget-template.css'],
})
export class EmptyTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
