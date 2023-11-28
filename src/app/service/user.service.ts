import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {User} from "../state/models";
import {FbStateModel} from "../state/fb-state/model";
import {InstaStateModel} from "../state/insta-state/model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {
    }

    public fetchUserData(): Observable<User> {
        return of({name: "Anoop Jha", email: "arjanoop@mail.uni-paderborn.de", age: 26, gender: "M"});
    }

    public fetchUserFBData(emailId: string): Observable<FbStateModel> {
        return of({friends: 47, posts: 17});
    }

    public fetchUserInstaData(emailId: string): Observable<InstaStateModel> {
        return of({followers: 97, posts: 56});
        // return throwError("Error");
    }
}
