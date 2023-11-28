import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {UpdateFbUserDataAnalysis} from "../../../state/fb-state/fb.action";
import {AppState} from "../../../state/app.state";
import {combineLatest, forkJoin, Observable} from "rxjs";
import {User} from "../../../state/models";
import {FbState} from "../../../state/fb-state/fb.state";

@Component({
    selector: 'app-fb',
    templateUrl: './fb.component.html',
    styleUrl: './fb.component.css'
})
export class FbComponent implements OnInit {
    numberOfFriends = 0;
    numberOfPosts = 0;
    @Select(FbState.getFriends) getFriends$!: Observable<number>;
    @Select(FbState.getPosts) getPosts$!: Observable<number>;

    constructor(private router: Router, private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(new UpdateFbUserDataAnalysis(this.store.selectSnapshot(AppState.getEmailId)));
        combineLatest([this.getFriends$, this.getPosts$]).subscribe(
            ([friends, posts]) => {
                this.numberOfFriends = friends;
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
