import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as url from 'url';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
   a = {};
  address:'';
  email:'';
  phoneNo:'';
  profilepic:'';
  sex:'';
  UserId:'';
  constructor(private http: Http,private route: ActivatedRoute) {}

  getData(values: any)
  {
    this.http.post('http://modifiedoauth-env.us-east-2.elasticbeanstalk.com/user/getData', values)
      .subscribe(
        (response) => {
          console.log(response.json()),
            this.address= response.json().Address;
            this.email=response.json().Email;
            this.phoneNo=response.json().Phoneno;
            this.profilepic=response.json().Profilepic;
            this.sex=response.json().Sex;
            this.UserId=response.json().userId;
        },
        (error) => console.log(error)
      );
  }
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      localStorage.setItem('id_token', fragment.split('&')[1].split('=')[1]);

      console.log("acesstoken=>"+ fragment.split('&')[0].split('=')[1]);
      console.log("token=>"+ fragment.split('&')[1].split('=')[1]);

      this.a={
        "accessToken":fragment.split('&')[0].split('=')[1],
        "token":fragment.split('&')[1].split('=')[1],
        "clientId":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU29tZSBQdWJsaWMgQXBwIiwic2NvcGVzIjoiYmFzaWMiLCJ0eXBlIjoicHVibGljIiwiaWF0IjoxNTEwNjc4NDk1MjI0LCJleHAiOjE1NDIyMTQ0OTUyMjR9.4NxfSF0IktOSGCEtKklwpLE4u4b8P1qdEr_hCQOqZB4"};
      this.getData(this.a);
    });

    }
  OnLogOut(){
    localStorage.removeItem('id_token');
    window.location.href = '/home';
    // this.getData(this.a);
  }
}

