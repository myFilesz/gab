import React, { useState, useEffect } from "react";
import {
  Container,
  AlignItensColum,
  DivInputFlout,
  AlignItensInline,
  Label,
  WrapLabel,
  LabelProduct,
  Button
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
  const [name_product, setName_product] = useState("PRODUTO");
  let [productsList, setProductsList] = useState("");

  let [props, setProps] = useState([]);
  const [approver, setApprover] = useState("");
  const [id_Approver, setId_Approver] = useState("1");

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

  useEffect(() => {
    if (qtde <= -1) {
      setQtde(0);
    }
  }, [qtde]);

  useEffect(() => {
    if (unitPrice <= -1) {
      setUnitPrice(0);
    }
  }, [unitPrice]);

  function handleAddItem(event) {
    event.preventDefault();
    const newItem = {
      id: product.id,
      name: product.nome,
      qtde: qtde,
      unitPrice: unitPrice
    };
    setProductsList(productsList => [...productsList, newItem]);
  }

  useEffect(() => {
    setProps(productsList);
  }, [productsList]);

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
            <Label>Numero do Pedido</Label>
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
            <WrapLabel>
            <Label>Requisitante</Label>
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
            </WrapLabel>
            {/* end of DropDown requester*/}
          </AlignItensInline>

          <AlignItensInline>
            {/* DropDown Approver*/}
            <WrapLabel>
            <Label>Aprovador</Label>
            <Dropdown style={{marginRight: '-5px'}}>
              <Dropdown.Toggle
                className="dropDown"
                id="requester"
                
              >
                {id_Approver}
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
            </WrapLabel>
            {/* end of DropDown Approver*/}
          </AlignItensInline>

          <AlignItensInline>
            {/* Dropdown Reason */}
            <WrapLabel>
            <Label>Motivo</Label>
            <Dropdown style={{marginRight: '-15px'}}>
              <Dropdown.Toggle
                className="dropdown"
                id="reason"
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
            </WrapLabel>
            {/* end of dropDown Reason */}
          </AlignItensInline>
        </AlignItensColum>
        <AlignItensColum>
          <AlignItensInline>
            <WrapLabel>
              <LabelProduct value={name_product}/>
              <Dropdown>
                <Dropdown.Toggle className="dropdown"></Dropdown.Toggle>
                <Dropdown.Menu>
                  {products &&
                    products.map(p => (
                      <Dropdown.Item
                        key={p.id}
                        onClick={() => setProduct(p)}
                        onMouseEnter={() => setName_product(p.nome)}
                      >
                        {p.nome}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </WrapLabel>
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
            <Button type="submit" onClick={handleAddItem}>
              Adicionar
            </Button>
          </AlignItensInline>
        </AlignItensColum>
      </Container>
      <ProductsTable props={props} />
    </div>
  );
}
