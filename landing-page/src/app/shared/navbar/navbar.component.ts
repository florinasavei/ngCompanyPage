import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public isMenuCollapsed = true;

  public scroll(element: any) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

}
