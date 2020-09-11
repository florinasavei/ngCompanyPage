import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiHelpService {

  constructor() { }

  public scroll(element: any) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

}
