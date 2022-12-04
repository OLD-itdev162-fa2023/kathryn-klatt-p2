import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  title = "View Character";
  characters: any;
  ch = [];
  model: any = {};
  id = 0;
  result: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:5035/api/Character/${id}`, this.model).subscribe(response => {this.characters= response;  this.ch = this.characters.data;
        console.log(this.ch)},
      error => {console.log(error)}
    );
  }

  update(){
    this.http.put('http://localhost:5035/api/Character/', this.model).subscribe(
      response => {this.model = response; this.home()},
      error => {console.log(error)}
    );
    console.log(this.model);
  }

  delete(){
      this.http.delete(`http://localhost:5035/api/Character/${this.characters.data.id}`, this.model).subscribe(
      response => {this.result = response; this.home()},
      error => {console.log(error)}
    );
    console.log(this.result);
  }

    home(){
    this.router.navigate(["/"]);
  }

  }

