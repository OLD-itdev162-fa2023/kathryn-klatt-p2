import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RPG Character Creation';
  constructor(private http: HttpClient){}

  ngOnInit(): void{
    throw new Error ('Method not implemented.');
  }
}


