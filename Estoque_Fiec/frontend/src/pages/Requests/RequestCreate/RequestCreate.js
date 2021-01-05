import React, { useState, useEffect } from "react";
import { Container, AlignItensColum, DivInputFlout, AlignItensInline } from "./styles";
import { Dropdown } from "react-bootstrap";

import Navbar from "../../../hooks/NavBar/NavBar";
import api from '../../../api';
import ProductsTable from './ProductsTable';

function RequestCreate() {
 
  const [requestNumber, setRequestNumber] = useState("");
  const [qtde, setQtde] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const [product, setProduct] = useState("");
  const [products, setProducts] = useState('');
  const [id_Product, setId_Product] = useState("0");
  const [name_product , setName_product] = useState(null);
  let [productsList , setProductsList] = useState("");

  let [props, setProps] = useState('');
  const [approver, setApprover] = useState("");
  const [name_Approver, setName_Approver] = useState("");
  const [id_Approver, setId_Approver] = useState("");

  const [requester, setRequester] = useState("");
  const [name_req, setName_req] = useState("");
  const [id_req, setId_req] = useState("1");

  const [reason, setReason] = useState("");
  const [id_reason, setId_Reason] = useState("");
  
  const [data, setData] = useState("");

  useEffect(async() => {
    const response = await api.get('/products/selectAll')
    setProducts(response.data)
  }, [])  


  useEffect(()=>{
    if(name_product==null) setName_product("PRODUTO")
  },[name_product])


  function hendleAddProduct() {
    console.log(id_Product);
    setProps(product)
  }


  return (
    <div>
      <Navbar />

      <Container>
        <AlignItensColum>
          <DivInputFlout>
            <input
              type="text"
              id="requestNumber"
              name="requestNumber"
              onChange={e => setRequestNumber(e.target.value)}
              value={requestNumber}
              placeholder="Numero do Pedido"
            />
            <label>Numero do Pedido</label>
          </DivInputFlout>
          <input type="date" value={data} onChange={e =>setData(e.target.value)} />
        </AlignItensColum>
        <AlignItensColum>
          <AlignItensInline>
            {/* DropDown requester*/}
            <label>Requisitante</label>
            <Dropdown>
              <Dropdown.Toggle className="dropDown" id="requester">
                {id_req}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {requester &&
                  requester.map(req => (
                    <Dropdown.Item
                      id={req.id}
                      name={req.nome}
                      className="dropDown-item"
                      onClick={() => {
                        setName_req(req.nome);
                        setId_req(req.id);
                      }}
                    >
                      {req.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* end of DropDown requester*/}
          </AlignItensInline>

          <AlignItensInline>
            {/* DropDown Approver*/}
            <label>Aprovador</label>
            <Dropdown>
              <Dropdown.Toggle
                className="dropDown"
                id="requester"
                style={{ width: "100px" }}
              >
                {approver}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {approver &&
                  approver.map(appro => (
                    <Dropdown.Item
                      id={appro.id}
                      name={appro.nome}
                      className="dropDown-item"
                      onClick={() => {
                        setApprover(appro.nome);
                        setId_Approver(appro.id);
                      }}
                    >
                      {approver.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* end of DropDown Approver*/}
          </AlignItensInline>

          <AlignItensInline>
            {/* Dropdown Reason */}
            <label>Motivo:</label>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown"
                id="reason"
                style={{ width: "100px" }}
              >
                {id_req}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {reason &&
                  reason.map(reason => (
                    <Dropdown.Item
                      id={reason.id}
                      name={reason.nome}
                      className="dropDown-item"
                      onClick={() => setId_Reason(reason.id)}
                    >
                      {reason.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* end of dropDown Reason */}
          </AlignItensInline>
        </AlignItensColum>

        <AlignItensColum>
          <AlignItensInline>
            <DivInputFlout>
            {!!name_product && <input type="text" id={id_Product} name="product" value={name_product} style={{ width: "300px", fontSize:'20px' }} /> }
            </DivInputFlout>
            {/* Dropdown Product */}
            <Dropdown style={{marginTop : '17px'}}>
              <Dropdown.Toggle
                className="dropdown"
                id="Product"
                style={{ width: "100px" }}
              >
                {name_product}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {products && products.map(p => (
                    <Dropdown.Item
                      id={p.id}
                      name={p.nome}
                      className="dropDown-item"
                      onClick={() => {setId_Product(p.id); setName_product(p.nome); }}
                    >
                      {p.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* end of dropDown product */}
          </AlignItensInline>
          <DivInputFlout>
            <input
              type="number"
              step="1.00"
              placeholder="0.00"
              id="qtdeMin"
              name="qtdeMin"
              value={qtde}
              onChange={e => setQtde(e.target.value)}
            />
            <label>Quantidade</label>
          </DivInputFlout>

          <DivInputFlout>
            <input
              type="text"
              step="1.00"
              placeholder="0.00"
              id="unitPrice"
              name="unitPrice"
              value={unitPrice}
              onChange={e => setUnitPrice(e.target.value)}
            />
            <label>Preço unitario</label>
          </DivInputFlout>
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              hendleAddProduct();
            }}
          >
            Adicionar
          </button>
        </AlignItensColum>
      </Container>
      <ProductsTable props={props}/>
    </div>
  );
}

export default RequestCreate;
