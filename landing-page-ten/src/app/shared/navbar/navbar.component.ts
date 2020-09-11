import { Component, OnInit } from '@angular/core';
import { UiHelpService } from 'src/app/helpers/ui-help.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public uiHelp:UiHelpService) { }

  ngOnInit(): void {
  }

  public isMenuCollapsed = true;

}
