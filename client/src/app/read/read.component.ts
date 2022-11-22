import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  post: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:5035/api/Character/${id}`).subscribe(post => {
      this.post = post;
    });
  }

}
