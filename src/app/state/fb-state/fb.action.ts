import FbStateModel from "./model/fb-state-model.interface";


export class UpdateFbUser {
  static readonly type = '[FB] Update User';
  constructor(public payload: FbStateModel) {}
}
