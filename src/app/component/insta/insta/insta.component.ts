import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../../state/app.state";
import {combineLatest, Observable} from "rxjs";
import {UpdateInstaUserDataAnalysis} from "../../../state/insta-state/insta.action";
import {InstaState} from "../../../state/insta-state/insta.state";

@Component({
    selector: 'app-insta',
    templateUrl: './insta.component.html',
    styleUrl: './insta.component.css'
})
export class InstaComponent implements OnInit {
    numberOfFollowers = 0;
    numberOfPosts = 0;
    @Select(InstaState.getFollowers) getFollowers$!: Observable<number>;
    @Select(InstaState.getPosts) getPosts$!: Observable<number>;

    constructor(private router: Router, private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(new UpdateInstaUserDataAnalysis(this.store.selectSnapshot(AppState.getEmailId)));
        combineLatest([this.getFollowers$, this.getPosts$]).subscribe(
            ([friends, posts]) => {
                this.numberOfFollowers = friends;
                this.numberOfPosts = posts;
            },
            error => {
                console.error('Error occurred:', error);
            }
        );
    }

    navigateHome(): void {
        this.router.navigateByUrl('/');
    }
}
