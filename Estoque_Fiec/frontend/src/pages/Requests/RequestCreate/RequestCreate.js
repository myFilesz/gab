import React, { useState, useEffect } from "react";
import {
  Container,
  AlignItensColum,
  DivInputFlout,
  AlignItensInline
} from "./styles";
import { Dropdown } from "react-bootstrap";

import Navbar from "../../../hooks/NavBar/NavBar";
import api from "../../../api";
import ProductsTable from "./ProductsTable";

export default function RequestCreate() {
  const [requestNumber, setRequestNumber] = useState("");
  const [qtde, setQtde] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  let [product, setProduct] = useState("");
  const [products, setProducts] = useState("");
  const [name_product, setName_product] = useState("");
  let [productsList, setProductsList] = useState("");

  let [props, setProps] = useState([]);
  const [approver, setApprover] = useState("");
  const [id_Approver, setId_Approver] = useState("");

  const [requester, setRequester] = useState("");
  const [id_req, setId_req] = useState("1");

  const [reason, setReason] = useState("");
  const [id_reason, setId_Reason] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    api.get("/products/selectAll").then(response => {
      setProducts(response.data);
    });
  }, []);


  useEffect(()=>{
    console.log(productsList)
    setProps(productsList)
  },[productsList])

  function handleAddItem(event){
    event.preventDefault()
    console.log("funfo")
    // const aux = {qtde,unitPrice};
    setProduct({product,qtde,unitPrice})

    setProductsList(productsList =>[...productsList, product])
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
          <input
            type="date"
            value={data}
            onChange={e => setData(e.target.value)}
          />
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
                      key={req.id}
                      onClick={() => setId_req(req.id)}
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
                      onClick={() => setId_Approver(appro.id)}
                      key={appro.id}
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
                      key={reason.id}
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
            <Dropdown>
              <Dropdown.Toggle className="dropdown" style={{ width: "100px" }}>
                {product.nome}
                <Dropdown.Menu>
                  {products &&
                    products.map(p => (
                      <Dropdown.Item
                        key={p.id}
                        onClick={() => setProduct(p)}
                      >
                        {p.nome}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </AlignItensInline>
          <AlignItensInline>
            <DivInputFlout>
              <input
                type="number"
                onChange={e => setQtde(e.target.value)}
                value={qtde}
                placeholder="quantidade"
              />
              <label>Quantidade</label>
            </DivInputFlout>
          </AlignItensInline>
          <AlignItensInline>
            <DivInputFlout>
              <input
                type="number"
                onChange={e => setUnitPrice(e.target.value)}
                value={unitPrice}
                placeholder="Preço unitario"
              />
              <label>Preço unitario</label>
            </DivInputFlout>
          </AlignItensInline>
          <AlignItensInline>
            <button
              type="submit"
              onClick={handleAddItem}
            >
              Adicionar
            </button>
          </AlignItensInline>
        </AlignItensColum>
      </Container>
      <ProductsTable props={props} />
    </div>
  );
}
