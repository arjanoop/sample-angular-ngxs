import InstaStateModel from "./model/Insta-state-model.interface";

export class UpdateInstaUserDataAnalysis {
    static readonly type = '[Insta] Update User\'s data analysis';

    constructor(public emailId: string) {
    }
}
