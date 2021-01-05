import React, { useState, useEffect } from "react";
import api from "../../../api";

export default function ProductsTable(props) {
    const [products, setProducts] = useState(props);
    const [productsList, setProductsList] = useState([]);
    console.log(props);
  
    useEffect((props) => {
        if(props == null || products == undefined) setProducts(['']);
        
        else setProductsList(products+props);

    }, [products])

    
  return (
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
        {!products && products.map(p => (
            <tr>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
