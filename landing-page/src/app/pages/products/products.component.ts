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
      name: "Success M4",
      images: [
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png',
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png',
      ]
    },
    {
      name: "Success M7",
      images: [
        '../../assets/img/products/cash-registers/SuccesM7/succes-m7-negru.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_alb.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_albastru.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_albastru_2.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_trio.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_turquoise.png',
        '../../assets/img/products/cash-registers/SuccesM7/SuccesM7_rosu_lateral.png',
      ]
    },
    {
      name: "Custom KubeIIX-F",
      images: [
        '../../assets/img/products/cash-registers/CustomKubeIIX-F/KubeX.png',
         '../../assets/img/products/cash-registers/CustomKubeIIX-F/KubeX_caricam-carta.png',
        '../../assets/img/products/cash-registers/CustomKubeIIX-F/KUBEX+mano+giornale-elettr.png']
    },
    {
      name: "Success M4",
      images: [
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4.png',
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_2.png',
        '../../assets/img/products/cash-registers/SuccesM4/SuccesM4_3.png',
      ]
    },
    {
      name: "Success M7",
      images: [
        '../../assets/img/products/cash-registers/SuccesM7/succes-m7-negru.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_alb.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_albastru.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_albastru_2.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_trio.png',
        '../../assets/img/products/cash-registers/SuccesM7/SeccesM7_turquoise.png',
        '../../assets/img/products/cash-registers/SuccesM7/SuccesM7_rosu_lateral.png',
      ]
    },
    {
      name: "Custom KubeIIX-F",
      images: [
        '../../assets/img/products/cash-registers/CustomKubeIIX-F/KubeX.png',
         '../../assets/img/products/cash-registers/CustomKubeIIX-F/KubeX_caricam-carta.png',
        '../../assets/img/products/cash-registers/CustomKubeIIX-F/KUBEX+mano+giornale-elettr.png']
    },
  ];


}
