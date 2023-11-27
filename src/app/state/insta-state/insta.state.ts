import { State, Action, StateContext, Selector } from '@ngxs/store';
import {InstaStateModel} from "./model";
import {UpdateInstaUser} from "./insta.action";
import {Injectable} from "@angular/core";


@State<InstaStateModel>({
  name: 'insta',
  defaults: {
    followers: 0,
    posts: 0,
  },
})

@Injectable()
export class InstaState {

  @Selector()
  static getFollowers(state: InstaStateModel): number {
    return state.followers;
  }

  @Selector()
  static getPosts(state: InstaStateModel): number {
    return state.posts;
  }

  @Action(UpdateInstaUser)
  updateInstaUser(ctx: StateContext<InstaStateModel>, { payload }: UpdateInstaUser) {
    const state = ctx.getState();
    state.followers = payload.followers
    state.posts = payload.posts
    ctx.patchState({...state});
  }
}
