import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  margin-top: 20px;
  padding: 30px;
`;

export const AlignItensColum = styled.div`
  width: 20%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AlignItensInline = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 25px;
`;

export const DivInputFlout = styled.div`
  position: relative;
  padding-top: 13px;

  input {
    border: 2px solid lightgrey;
    border-bottom: 2px solid lightgrey;
    background-color: #f5fffa;
    outline: none;
    width: 240px;
    min-width: 200px;
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

export const WrapTable = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  max-height: 50vh;
`;

export const Table = styled.table`
  width: 40%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Th = styled.th`
  justify-items: center;
  padding: 12px 15px;
`;

export const Td = styled.td`
  padding: 12px 15px;
`;

export const THead = styled.thead`
  tr {
    background-color: #3951b2;
    color: #ffffff;
    text-align: left;
  }
`;

export const TBoby = styled.tbody`
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`;

export const Options = styled.th`
  color: #3951b2;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-top: 5px;
`;
export const WrapLabel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  height: 45px;
  border-bottom: solid black 1px;
`;
export const LabelProduct = styled.input`
  border: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  background-color: #f5fffa;
  width: 100%;
  min-width: 200px;
  height: 40px;
  margin-top: 3px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  font-size: 20px;
  margin-top: 20px;
  background: #007bff;
  color: #fff;
  border-radius: 10px;
  
  :hover{
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background: #0062CC;
  }
` 
