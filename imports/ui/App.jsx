import React, { Fragment } from 'react';
import { Task} from './Task'
import { Manda } from './manda.jsx';
import { useTracker } from 'meteor/react-meteor-data';
import { Login } from './Login.jsx';
import GlobalStyle from '../globalstyles/global';
import {Cabecario} from './styles/styleLista.js';
export const App = () => {
const user = useTracker(() => Meteor.user())
const logout = () => Meteor.logout();
  return(
   
    <>
       <GlobalStyle/>
    {user ? (
      <Fragment>
        <Cabecario className="user" > 
        
        <span>{user.username}</span>
        <button onClick={logout}>  log out  </button>
       
        </Cabecario>
    
    <Manda/>
    
    
    <div>
      
     
     <Task/>
    
    </div>
    </Fragment>
    ) : (<Login/> )}
    </>
    )

};
