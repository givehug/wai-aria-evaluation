import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-widget',
  template: `
    <ngb-carousel *ngIf="images">
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="images[0]" alt="Random first slide" />
        </div>
        <div class="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </ng-template>
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="images[1]" alt="Random second slide" />
        </div>
        <div class="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </ng-template>
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="images[2]" alt="Random 3rd slide" />
        </div>
        <div class="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </ng-template>
    </ngb-carousel>
  `,
})
export class CarouselWidgetComponent implements OnInit {
  images = [944, 944, 944].map((n) => `https://picsum.photos/id/${n}/550/300`);

  constructor() {}

  ngOnInit(): void {}
}
