import React from 'react';
import {ADD_TO_CART, REMOVE_TO_CART} from '../constants';

export const AddToCart = (data) => {
    console.log('action');
    return{
        type:ADD_TO_CART,
        data:data
    }
}
 export const removeToCart = () => {
    // console.log('action');
    return{
        type:REMOVE_TO_CART,
    }
};

