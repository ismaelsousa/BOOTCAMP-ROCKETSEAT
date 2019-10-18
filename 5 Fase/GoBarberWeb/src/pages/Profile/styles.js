import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form{
    display:flex;
    flex-direction: column;
    margin-top: 30px;

    input{
      background: rgba(0,0,0,0.1);
      border:0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff !important;
      margin: 0 0 10px;
      &::placeholder{
        color: rgba(255,255,255,0.7);
      }
    }
    hr{
      border: 0;
      height: 1px;
      background: rgba(255,255,255,0.2);
      margin: 10px 0 20px;
    }
    span{
      color: #Fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }
    button{
      color: #fff;
      background:#3b9eff;
      margin:5px 0 0;
      border:0;
      height: 44px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;
      &:hover{
        background: ${darken(0.03,'#3b9eff')}
      }
    }

    a{
      color: #fff;
      margin-top: 15px;
      font-size:16px;
      opacity: 0.8;
      &:hover{
        opacity:1;
      }
    }
  }


  > button{
    width:100%;
    color: #fff;
    background:#F64c75;
    margin: 10px 0 0;
    border:0;
    height: 44px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;
    &:hover{
      background: ${darken(0.08,'#F64C75')}
    }
  }

`;

