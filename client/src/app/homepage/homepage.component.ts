import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  title = 'RPG Character Builder';
  characters: any;
  charArray = [];

  constructor(private http: HttpClient, private route: Router) {   }

  ngOnInit(): void {
    this.http.get('http://localhost:5035/api/Character/GetAll').subscribe(
      response => {this.characters= response;  this.charArray = this.characters.data;
        console.log(this.characters.data)},
      error => {console.log(error)}
    );
  }

}
