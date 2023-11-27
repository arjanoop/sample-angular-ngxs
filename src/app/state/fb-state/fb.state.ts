import { State, Action, StateContext, Selector } from '@ngxs/store';
import {FbStateModel} from "./model";
import {UpdateFbUser} from "./fb.action";


@State<FbStateModel>({
  name: 'fb',
  defaults: {
    friends: 0,
    posts: 0,
  },
})
export class FbState {

  @Selector()
  static getFriends(state: FbStateModel): number {
    return state.friends;
  }

  @Selector()
  static getPosts(state: FbStateModel): number {
    return state.posts;
  }


  @Action(UpdateFbUser)
  updateFbUser(ctx: StateContext<FbStateModel>, { payload }: UpdateFbUser) {
    const state = ctx.getState();
    state.friends = payload.friends
    state.posts = payload.posts

    ctx.patchState({...state});
  }

}
