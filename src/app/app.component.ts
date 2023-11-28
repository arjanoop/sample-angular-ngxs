import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState} from "./state/app.state";
import {Observable} from "rxjs";
import {User} from "./state/models";
import {FetchUser} from "./state/app.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  user:User = {} as User;

  @Select(AppState.getUser) user$!: Observable<User>;
  constructor(private store: Store, private router: Router) {
  }
  ngOnInit(): void {
    this.store.dispatch(new FetchUser());
    this.user$.subscribe((user:User)=>{
      this.user = user;
    })
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  shouldShowButtons(): boolean {
    return !this.isCurrentUrl('/fb') && !this.isCurrentUrl('/insta');
  }

  isCurrentUrl(url: string): boolean {
    return this.router.url.includes(url);
  }
}
