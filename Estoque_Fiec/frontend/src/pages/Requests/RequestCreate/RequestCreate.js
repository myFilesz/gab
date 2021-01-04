import React, { useState } from "react";
import {
  Container,
  AlignItensColum,
  DivInputFlout,
  AlignItensInline
} from "./styles";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";

import Navbar from "../../../hooks/NavBar/NavBar";
// import { func } from "prop-types";

function RequestCreate() {
  const [requestNumber, setRequestNumber] = useState('');
  const [qtde, setQtde] = useState('a');
  const [unitPrice, setUnitPrice] = useState('');

  const [approver, setApprover] = useState('');
  const [name_Approver, setName_Approver] = useState('');
  const [id_Approver,setId_Approver ] = useState('');

  const [requester, setRequester] = useState('');
  const [name_req, setName_req] = useState('');
  const [id_req, setId_req] = useState('1');

  const [reason, setReason] = useState('');
  const [id_reason, setId_Reason] = useState('');


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
          <input type="date" value="2017-06-01"></input>
        </AlignItensColum>
        <AlignItensColum>
          <AlignItensInline>
            {/* DropDown requisitante*/}
            <label>Requisitante</label>
            <Dropdown>
              <Dropdown.Toggle className="dropDown" id="requester">
                {id_req}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
                {requester &&
                  requester.map(req => (
                    <Dropdown.Item
                      id={req.id}
                      name={req.nome}
                      className="dropDown-item"
                      onClick={() =>{
                        setName_req(req.nome);
                        setId_req(req.id);
                      }}
                    >
                      {req.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* Fim do DropDown requisitante*/}
          </AlignItensInline>

          <AlignItensInline>
            {/* DropDown Aprovador*/}
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
                      onClick={() =>{
                          setApprover(appro.nome);
                          setId_Approver(appro.id);
                      }}
                    >
                      {approver.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            {/* Fim do DropDown Aprovador*/}

            {/* Dropdown Motivo */}
            <Dropdown>
              <Dropdown.Toggle className="dropDown" id="reason">
                {id_req}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
                {reason  &&
                  reason.map(reason => (
                    <Dropdown.Item
                      id={reason.id}
                      name={reason.nome}
                      className="dropDown-item"
                      onClick={() =>setId_Reason(reason.id)}
                    >
                      {reason.nome}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </AlignItensInline>
        </AlignItensColum>
        <AlignItensColum>
          <DivInputFlout>
            <input
              type="qtde"
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
        </AlignItensColum>
      </Container>
    </div>
  );
}

export default RequestCreate;
