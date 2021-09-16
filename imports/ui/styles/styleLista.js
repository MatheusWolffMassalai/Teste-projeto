import styled from "styled-components";
export const Cabecario =  styled.div` 
background-color: #a1fff2;
height: 10%;
display: flex;
align-items: center;
font-size: 1vw;
font-weight: 400;
span{
    margin-left: 5%;
}
button{
 
    margin-left: 3%;
    font-size: 1vw;
    width: 15%;
    height: 75%;
    background-color: transparent;
    border: 0;
}
button:hover{
    background-color: white;
}

@media only screen and (max-device-width: 800px) {
    font-size: 10px;
    button{font-size:10px}
}
@media only screen and (max-device-width: 650px) {
    font-size: 10px;
    button{font-size:8px}
}
`

export const Adicionar = styled.div `
height: 10%;
display: flex;
align-items: center;
width: 100%;
form{
    width: 100%;
}
input{
        padding: 0.5%;
        border-color: #00ffcc;
        border-radius: 10px;
        width: 40%;
        margin-left: 6%;
        font-size: 1vw;
        font-weight: 400 ;
}
button{
    padding: 1%;
    margin-left: 3%;
    border-color: #00ffcc;
    border-radius: 10px;
    font-size: 1vw;
}
button:hover{
    background-color: #a1fff2 ;
}

@media only screen and (max-device-width: 800px) {
    
    button{font-size:10px}
    input{font-size:10px}
}
@media only screen and (max-device-width: 650px) {
  
    button{font-size:8px}
    input{font-size:8px}
}

`
export const TarefaStyle = styled.div `

width: 100%;
height: 80%;


table{height:50%;width:  100%;word-break: break-word; margin-top:20px}
.muda{

display: flex;
align-items: center;
justify-content: center ;
word-break: break-word

}
.muda button{
    padding: 0.8%;
    margin: 0.5%;
    font-size: 1vw;
    border-color: #af54ff;
    border-radius: 20%;
    background-color: #befff6;

}
button:hover{

background-color: #d6fff9;
}
form{
    display: flex;
    align-items: center;
    text-align: center  ;
}


td{text-align: center;  
width: 15%;
}

.tabela button{
padding: 4%;
border-color: blue;
border-radius: 10%;
background-color: red;
color: white;
font-size: 1vw;
}

.tabela button:hover{
    background-color: #ff3d57;
}
select{
    padding: 3%; 
    border-radius: 1000px;
    border:0px; background-color:#befff6;
    font-size:1vw;
}
th{font-size:1.4vw;width:15%}
td{font-size:1vw}


input{width:10%}
@media only screen and (max-device-width: 800px) {
    
    th{font-size:15px;width:15%}
    td{font-size:10px}
    table{font-size:10px}
    .tabela button{font-size:1px}
    select{font-size:10px}
    .muda button{font-size:10px}
    input{width:10px}
}
@media only screen and (max-device-width: 650px) {
    
    th{font-size:10px;width:15%}
    td{font-size:8px}
    table{font-size:8px}
    .tabela button{font-size:8px}
    select{font-size:8px}
    .muda button{font-size:8px}
    input{width:7px}
}

`