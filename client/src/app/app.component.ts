import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'RPG Character Builder';
  Character: any;
  constructor(){
  //logs false for default environment
  }

  ngOnInit(): void{
    throw new Error ('Method not implemented.');
  }
}


