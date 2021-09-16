import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { LoginInput } from './InputLogin';
import { Content, Slogin, Tudo } from './styles/styleLogin.js';

export const Login = () => {
  
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [cadastra, setCadastra] = useState(false);

    const submit = e => {
      
        e.preventDefault();
        Meteor.loginWithPassword(user, senha, (err) =>{
          if(err){
           
              alert(err)}}
              
              
              ); }
    const cadastro = e => {
      
      e.preventDefault();
      if(senha2 !== senha){
        alert("As senha estão diferentes")
        setCadastra(true)
        return
      }
     
      
      setCadastra(false)
      
     Meteor.call('user.adiciona',user, senha, (err) =>{
      if(err){
       
          alert(err)}
       
        
    })
   
    }
   

   
    
    return (
      
        <>
           <Tudo>
             <Slogin>
               <Content>
             
                <form onSubmit={cadastra ? cadastro : submit} >
                <h1>{cadastra ?  'Faça seu cadastro' : 'Faça login' }</h1>           
                  <LoginInput text={"Nome de usuário"}  placeholder={"user"} name={"user"} type={"text"} set={setUser}/>
                  <LoginInput text={"Senha"}  type={"password"} placeholder={"Password"} name={"password"} set={setSenha}/>
                  {cadastra ? (<LoginInput  text={"Confirme a senha"} type={"password"} placeholder={"Password"} name={"password"} set={setSenha2} />) : ""  }
                  <span id="inteiro"onClick={() => setCadastra(!cadastra)}> {cadastra ? 'Para fazer login clique aqui' : 'Para fazer o cadastro clique aqui'}</span>
                  <button type="submit">{cadastra ? 'Cadastre-se' : 'Log in'}</button>
                </form>
        </Content>
        </Slogin>
        </Tudo>
            </>
       
      );
    };
    
