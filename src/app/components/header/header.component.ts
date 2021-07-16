import { Component, HostListener, OnInit } from '@angular/core';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  navFixed: boolean = false;
  private scrollOffset: number = 70;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }
  constructor() { }

  ngOnInit(): void {
  }
  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
