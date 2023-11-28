import {State, Action, StateContext, Selector} from '@ngxs/store';
import {FbStateModel} from "./model";
import {UpdateFbUserDataAnalysis} from "./fb.action";
import {Injectable} from "@angular/core";
import {UserService} from "../../service/user.service";


@State<FbStateModel>({
    name: 'fb',
    defaults: {
        friends: 0,
        posts: 0,
    },
})

@Injectable()
export class FbState {
    constructor(private userService: UserService) {
    }

    @Selector()
    static getFriends(state: FbStateModel): number {
        return state.friends;
    }

    @Selector()
    static getPosts(state: FbStateModel): number {
        return state.posts;
    }


    @Action(UpdateFbUserDataAnalysis)
    updateFbUserDataAnalysis(ctx: StateContext<FbStateModel>, {emailId}: UpdateFbUserDataAnalysis) {
        const state = ctx.getState();
        this.userService.fetchUserFBData(emailId).subscribe((data: FbStateModel) => {
            state.friends = data.friends
            state.posts = data.posts
            ctx.patchState({...state});
        })
    }

}
