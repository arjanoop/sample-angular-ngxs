import {State, Action, StateContext, Selector} from '@ngxs/store';
import {InstaStateModel} from "./model";
import {UpdateInstaUserDataAnalysis} from "./insta.action";
import {Injectable} from "@angular/core";
import {UserService} from "../../service/user.service";


@State<InstaStateModel>({
    name: 'insta',
    defaults: {
        followers: 0,
        posts: 0,
    },
})

@Injectable()
export class InstaState {

    constructor(private userService: UserService) {
    }

    @Selector()
    static getFollowers(state: InstaStateModel): number {
        return state.followers;
    }

    @Selector()
    static getPosts(state: InstaStateModel): number {
        return state.posts;
    }

    @Action(UpdateInstaUserDataAnalysis)
    updateInstaUserDataAnalysis(ctx: StateContext<InstaStateModel>, {emailId}: UpdateInstaUserDataAnalysis) {
        const state = ctx.getState();
        this.userService.fetchUserInstaData(emailId).subscribe((data: InstaStateModel) => {
            state.followers = data.followers
            state.posts = data.posts
            ctx.patchState({...state});
        })
    }
}
