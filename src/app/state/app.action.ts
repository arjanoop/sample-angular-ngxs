import {User} from "./models";

export class UpdateUser {
  static readonly type = '[App] Update User';
  constructor(public payload: User) {}
}
