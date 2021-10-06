import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBar() {
    let burger = document.querySelector('#nav');
    let navigation = document.querySelector('.navbar');

    burger?.classList.toggle('open'); 

    navigation?.classList.toggle('show-navbar'); 
    navigation?.classList.remove('remove');
  }

  hideBar() {
    let navigation = document.querySelector('.navbar');
    let burger = document.querySelector('#nav');
    navigation?.classList.remove('show-navbar');
    navigation?.classList.add('remove');
    burger?.classList.remove('open');
  }
}
