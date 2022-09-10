import {IProduct, Actions, IAction, IState} from "../../models/models";

const initialState: IState = {
    items: []
}

export const shopListReducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case Actions.ADD_SHOP_ITEM:
            return {...state, items: action.payload};
        default:
            return state;
    }
}

export const shopListAC = (payload: IProduct[]) => {
    return {
        type: Actions.ADD_SHOP_ITEM,
        payload
    }
}

