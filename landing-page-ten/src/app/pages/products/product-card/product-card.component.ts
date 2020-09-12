import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbSlideEvent, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../model/product.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
  @Input("product") product: Product;
  
  constructor() { }

  ngOnInit(): void {
    this.carousel.pause();
  }

  
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  onSlide(slideEvent: NgbSlideEvent) {

  }

}
