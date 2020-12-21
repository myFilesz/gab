import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 50vh;
    border: solid 3px black;
    display: flex;
    justify-content: space-around;
`

export const AlignItensColum = styled.div`
    width: 30%;
    height: 100%;
    border: solid 3px black;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`  
export const AlignItensInline = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 25px;
`

export const DivInputFlout = styled.div`
  position: relative;
  padding-top: 13px;

  input {
    border: 2px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    background-color: #f5fffa;
    outline: none;
    width: 25em;
    height: 40px;
    margin-top: 3px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 10px;
  }

  input:focus {
    border: 2px solid #3951b2;
    margin-left: "20px";
    margin-right: "10px";
    background-color: #f5fffa;
  }

  input::placeholder {
    color: transparent;
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0px;
    left: 18px;
    margin-top: 30px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    background-color: #f5fffa;
  }

  input:required:invalid + label {
    color: #3951b2;
  }
  input:focus:required:invalid {
    border-bottom: 2px solid #3951b2;
  }
  input:required:invalid + label:before {
    content: "*";
  }
  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 7px;
    color: #3951b2;
  }
`;