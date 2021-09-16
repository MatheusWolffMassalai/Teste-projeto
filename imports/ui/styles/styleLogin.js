    import styled from "styled-components";
    export const Tudo = styled.div`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #a1fff2;
    `
    export const Slogin = styled.div` 
        width: 100%;
        max-width: 25% ;
        min-width: 415px;
        margin: 20px;
        height: 35%;
        max-height: 400px;

    `
    export const Content = styled.div`
    
        padding-top: 10%;
        padding-bottom: 10%;
        border-radius: 50px;
        width: 100%;
        background-color: #FFF;
        height: 100%;

        form{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 1vw;
            height: 100%;
            
           
            
        }
        button{
            text-align: center;
            padding: 4px;
            border-radius: 3px;
            border-color: #af54ff;
            height: 20%;
            width: 25%;
            min-width: 150px
        }
        p{width: 75%;
            margin 2%;
        }
        #inteiro{
            margin 2%;
            color: purple
        }
        #inteiro:hover{
            margin 2%;
            color: black
        }
        input{
            text-align: center;
            width: 100%;
            height: 100%;
            
            border-radius: 10px;
            border-color: #af54ff;
            
        }

    @media only screen and (max-device-width: 4000px ),(min-device-width: 4000px) {
            form{font-size: 30px}
            input{font-size: 30px}
            button{font-size: 30px}
    }
    @media only screen and (max-device-width: 3000px) {
        form{font-size: 25px}
        input{font-size: 25px}
        button{font-size: 25px}
    }
    @media only screen and (max-device-width: 2500px) {
        form{
            font-size: 20px}
        input{font-size: 20px}
        button{font-size: 20px}
    }
    `