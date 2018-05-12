import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  a = false;
  constructor() { }

  ngOnInit() {
    this.storagecheck();
  }

  storagecheck(){
  if (localStorage.getItem("id_token") !== null) {}
   this.a = true;
  }

}
