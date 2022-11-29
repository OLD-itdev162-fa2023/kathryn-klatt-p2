import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  characters: any;
  charList = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5035/api/Character/GetAll').subscribe(
      response => {
        this.characters = response; //storing JSON response to character element
        this.charList=this.characters.list; // array list created using JSON element property
        console.log(this.charList)},
      error => {console.log(error)}
    );
  }

}
