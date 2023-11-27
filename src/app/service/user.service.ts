import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../state/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  public fetchUserData():Observable<User>{
    return of({name:"Anoop Jha", email:"arjanoop@mail.uni-paderborn.de", age:26, gender:"M"});
  }
}
