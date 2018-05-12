import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  myfunction() {
    this.route.fragment.subscribe((fragment: string) => {
     // console.log( fragment.split('=')[1]);
      window.location.href = '/userinfo#' + fragment;
    });
  }
  ngOnInit() {
    this.myfunction();
  }

}
