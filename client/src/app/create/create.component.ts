import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {}
  constructor() { }

  ngOnInit(): void {
  }

  createCharacter(){
    console.log(this.model);
  }

  cancel(){
    console.log("cancel create post")
  }

}
