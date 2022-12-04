import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = 'Edit Character';
  model: any = {};
  characters: any;
  charArray = [];


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
        this.http.get('http://localhost:5035/api/Character/{id}').subscribe(
      response => {this.characters= response;  this.charArray = this.characters.data;
        console.log(this.characters.data)},
      error => {console.log(error)}
        );
  }

  editCharacter(){
    this.http.put('http://localhost:5035/api/Character', this.model).subscribe(
      response => {this.home();},
      error => {console.log(error)}
    );
    console.log(this.model);
  }

  cancel(){
    this.home();
  }

  home(){
    this.route.navigate(["/"]);
  }

}