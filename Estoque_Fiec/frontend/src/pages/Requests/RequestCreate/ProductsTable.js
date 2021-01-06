import React, { useState, useEffect } from "react";
import api from "../../../api";

export default function ProductsTable(props) {
    const newList = props.props
    const [productsList, setProductsList] = useState([newList]);
    useEffect(() => {
      setProductsList(newList)
    }, [newList])
    
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Qrde</th>
          <th>Proço Unitario</th>
        </tr>
      </thead>
      <tbody>
        {productsList && productsList.map(p =>(

            <tr >
              <td>{p.nome}</td>
              <td>-</td>
              <td>{p.qtde}</td>
              <td>{p.unitPrice}</td>
            </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
