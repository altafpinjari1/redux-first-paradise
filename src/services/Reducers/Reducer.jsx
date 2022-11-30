// import { ADD_TO_CART,REMOVE_TO_CART } from "../constants";
const initialState={
    cardData:[]
 }
export default function CartItems(state=[],action){

    switch(action.type){
        case 'ADD_TO_CART' :
            // console.log('data')
        return [
            ...state,
            {cardData:action.data}
        ]
        case 'REMOVE_TO_CART' :
            // console.log('data')
            state.pop();
        return [
            ...state,
           
        ]
        default:
            return state; 
    }
 } 



 /////////////////////////////////////////////////////////////
//  in card data the data of our axios will be found .

//////////////////////////////////////////////////////////////