import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AppStateModel, User} from "./models";
import {FbState} from "./fb-state/fb.state";
import {InstaState} from "./insta-state/insta.state";
import {FetchUser, UpdateUser} from "./app.action";
import {UserService} from "../service/user.service";
import {Injectable} from "@angular/core";


@State<AppStateModel>({
  name: 'app',
  defaults: {
    user: {
      name: '',
      email: '',
      gender: '',
      age: 0,
    },},
  children: [FbState, InstaState],
})
@Injectable()
export class AppState {

  constructor(private userService: UserService) {
  }
  @Selector()
  static getUser(state: AppStateModel): User {
    return state.user;
  }

  @Action(FetchUser)
  fetchUser(ctx: StateContext<AppStateModel>,) {
    this.userService.fetchUserData().subscribe((user)=>{
      ctx.patchState({user});
    });
  }

  @Action(UpdateUser)
  updateUser(ctx: StateContext<AppStateModel>, { payload }: UpdateUser) {
    const user = { ...ctx.getState().user, ...payload };
    ctx.patchState({ user });
  }
}
