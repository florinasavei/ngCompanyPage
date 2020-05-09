import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './model/product.model';

@Component({
  selector: 'app-producs',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
    {
      images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
      '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
    },
  ]

  product: Product = {
    images : ['../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png', '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
    '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png']
  };


}
