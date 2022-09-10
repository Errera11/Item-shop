export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export type Response = Array<IProduct>;

export interface IAction {
    type: Action
    payload: IProduct[]
}

export enum Actions {
    ADD_SHOP_ITEM = 'ADD_SHOP_ITEM',
    example = 'e',
    POST_PRODUCT = 'POST_PRODUCT'
}

export type Action = Actions.ADD_SHOP_ITEM | Actions.example | Actions.POST_PRODUCT;

export interface IState {
    items: IProduct[]
}
