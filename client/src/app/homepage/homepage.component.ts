import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

/* export interface Data {
  class: string;
  defense: any;
  hitPoints: any;
  id: any;
  intelligence: any;
  name: string;
  strength: any;
} */



export class HomepageComponent {
  title = 'RPG Character Builder';
  characters: any;
  charArray = [];

  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    this.http.get('http://localhost:5035/api/Character/GetAll').subscribe(
      response => {this.characters= response;  this.charArray = this.characters.data;
        console.log(this.characters.data)},
      error => {console.log(error)}
    );
  }

}
