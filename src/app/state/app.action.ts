import {User} from "./models";

export class UpdateUser {
  static readonly type = '[App] Update User';
  constructor(public payload: User) {}
}

export class FetchUser {
  static readonly type = '[App] fetch User';
  constructor() {}
}
