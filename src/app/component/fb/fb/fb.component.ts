import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrl: './fb.component.css'
})
export class FbComponent  implements OnInit{
  numberOfFriends = 100;
  numberOfPosts = 50;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateHome(): void {
    this.router.navigateByUrl('/');
  }
}
