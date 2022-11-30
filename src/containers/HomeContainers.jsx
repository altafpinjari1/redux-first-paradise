import React from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';
import {AddToCart,removeToCart} from '../services/Actions/Action'


    const mapStateToProps=state=>({
        data:state.CartItems
        
        
    })
    const mapDispatchToProps=dispatch=>({
        addTocartHandler:data=>dispatch(AddToCart(data)),
        removeTocartHandler:data=>dispatch(removeToCart(data))
    })
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);
