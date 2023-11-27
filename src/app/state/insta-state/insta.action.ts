import InstaStateModel from "./model/Insta-state-model.interface";

export class UpdateInstaUser {
  static readonly type = '[Insta] Update User';
  constructor(public payload: InstaStateModel) {}
}
