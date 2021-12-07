import { observable } from "mobx";
import { breakdownInfoModel, incomeInfoModel } from "../views/Home";

export class IncomeStore {
    constructor() {
    }

    @observable public incomeInfo?: incomeInfoModel;
    @observable public breakdownInfo?: breakdownInfoModel;
}

export const incomeStore = new IncomeStore();