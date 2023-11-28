import FbStateModel from "./model/fb-state-model.interface";


export class UpdateFbUserDataAnalysis {
    static readonly type = '[FB] Update User\'s data analysis';

    constructor(public emailId: string) {
    }
}
