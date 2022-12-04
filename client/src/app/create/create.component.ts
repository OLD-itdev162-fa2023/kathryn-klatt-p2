import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Create a Character';
  model: any = {};

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  createCharacter(){
    this.http.post('http://localhost:5035/api/Character', this.model).subscribe(
      response => {this.home()},
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
