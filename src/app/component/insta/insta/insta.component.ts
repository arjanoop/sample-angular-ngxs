import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrl: './insta.component.css'
})
export class InstaComponent implements OnInit  {
  numberOfFollowers = 200;
  numberOfPosts = 30;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateHome(): void {
    this.router.navigateByUrl('/');
  }
}
