import React, { Component } from 'react';
import {Redirect,Route} from 'react-router-dom';
import auth from '../../services/authService';


const ProtectedRoute = ({path,render,component:Component,...rest})=> {
    return(
          <Route 
            path={path}
            {...rest}
            render={props =>{
                if(!auth.getCurrentUser()) return <Redirect to="/login" />;
                return Component ? <Component {...props} /> : render(props);
            }}
          />  
    );
};

export default ProtectedRoute;