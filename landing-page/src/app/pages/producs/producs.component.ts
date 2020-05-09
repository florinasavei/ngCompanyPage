import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-producs',
  templateUrl: './producs.component.html',
  styleUrls: ['./producs.component.scss']
})
export class ProducsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carousel.pause();
  }

  images = ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
  '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png'];

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  onSlide(slideEvent: NgbSlideEvent) {

  }

}
