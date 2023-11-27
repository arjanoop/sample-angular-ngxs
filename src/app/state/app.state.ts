import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AppStateModel, User} from "./models";
import {FbState} from "./fb-state/fb.state";
import {InstaState} from "./insta-state/insta.state";
import {UpdateUser} from "./app.action";


@State<AppStateModel>({
  name: 'app',
  defaults: {
    user: {
      name: '',
      email: '',
      id: '',
      gender: '',
      age: 0,
    },},
  children: [FbState, InstaState],
})
export class AppState {
  @Selector()
  static getUser(state: AppStateModel): User {
    return state.user;
  }

  @Action(UpdateUser)
  updateUser(ctx: StateContext<AppStateModel>, { payload }: UpdateUser) {
    const user = { ...ctx.getState().user, ...payload };
    ctx.patchState({ user });
  }
}
