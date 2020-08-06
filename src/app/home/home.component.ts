import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="slick-nav slick-arrow-right"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-nav slick-arrow-left"><i class="fas fa-angle-left"></i></div>',
    dots: true,
    infinite: false,
    arrows: true,
    dotsClass: 'slider-paging-number',
    // tslint:disable-next-line: typedef
    customPaging (slider, i) {
      return '<div class="slick-dots"></div>';
    },

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        //     slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }

  ]

  };

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


  ngOnInit(): void {
  }

}
