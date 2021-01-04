import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

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

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 50%;
  height: 800px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-left: 10px;
  box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.3);
`;

export const ContainerFormUp = styled.div`
  width: 100%;
  height: 285px;
  display: flex;
  justify-content: space-around;
`;

export const ContainerFormUpLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 310px;
  width: 50%;
  border-radius: 10px;
`;

export const ContainerFormUpRight = styled.div`
  width: 50%;
  height: 310px;
  width: 50%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ContainerFormDown = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ConatinerFormDownLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f8f8f8;
`;

export const ConatinerFormDownRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f8f8f8;
  margin-top: 55px;
`;

export const Card = styled.div`
  float: left;
  width: 130px;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.3);
  background: #fff;

  .card:hover {
    box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.3);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    border-radius: 8px;
  }
`;

export const ConatinerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 5em;
  background: #fff;
  margin-left:10px;
  margin-right:10px;
  box-shadow: 5px 4px 15px 0px rgba(0, 0, 0, 0.3);
`;

export const ContainerDropDown = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  margin-top:20px;
`;


export const ContainerButton = styled.div`
  width:100%;
  height:30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`

export const ContainerQtde = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    border: 2px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    background-color: #f5fffa;
    outline: none;
    width: 225px;
    height: 40px;
    margin-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 10px;
    background: #fff;
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
    top: 50px;
    left: 40px;
    margin-top: 135px;
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
    margin-top: 113px;
    color: #3951b2;
  }

  @media (max-width:1669px){
    label{
       margin-top: 118px;
       left:30px;  
    }

    input:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 90px;
    color: #3951b2;
  }
  }
`
export const DropDownQtde = styled.div`
  margin-top:17px;
`