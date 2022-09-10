import axios from 'axios';
import {Response} from "../models/models";

export const fetchData = async (limit?: number) => {
    const response = await axios.get<Response>('https://fakestoreapi.com/products', {
        params: {
            limit
        }
    });
    return response;
}

export const postData = async (title: string) => {
    const data = {
        title,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    const response = await axios.post('https://fakestoreapi.com/products', data);
    return response;
}