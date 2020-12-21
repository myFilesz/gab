import React, { Component } from "react";
import {
  Container,
  AlignItensColum,
  DivInputFlout,
  AlignItensInline
} from "./styles";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";

export default class RequestCreate extends Component {
  state = {
    requestNumber: "",
    qtde: "",
    unitPrice: "",
    requester: [],
    approver:[],
    appro: ''
  };

  render() {
    const { requester } = this.state;
    const { approver } = this.state;
    return (
      <div>
        <Container>
          <AlignItensColum>
            <DivInputFlout>
              <input
                type="text"
                id="requestNumber"
                name="requestNumber"
                onChange={e => this.setState({ requestNumber: e.target.value })}
                value={this.state.requestNumber}
                placeholder="Numero do Pedido"
              />
              <label>Numero do Pedido</label>
            </DivInputFlout>
          </AlignItensColum>
          <AlignItensColum>
            <AlignItensInline>
              {/* DropDown requisitante*/}
              <label>Requisitante</label>
              <Dropdown>
                <Dropdown.Toggle className="dropDown" id="requester">
                  {this.state.requester}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item></Dropdown.Item>
                  {requester &&
                    requester.map(req => (
                      <Dropdown.Item
                        id={req.id}
                        name={req.nome}
                        className="dropDown-item"
                        onClick={e =>
                          this.setState({
                            req: req.nome,
                            id_req: req.id
                          })
                        }
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
                <Dropdown.Toggle className="dropDown" id="requester">
                  {this.state.approver}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item></Dropdown.Item>
                  {approver &&
                    approver.map(appro => (
                      <Dropdown.Item
                        id={appro.id}
                        name={appro.nome}
                        className="dropDown-item"
                        onClick={e =>
                          this.setState({
                            approver: appro.nome,
                            id_appro: appro.id
                          })
                        }
                      >
                        {approver.nome}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Fim do DropDown Aprovador*/}
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
                value={this.state.qtde}
                onChange={e => this.setState({ qtde: e.target.value })}
              />
              <label>Quantidade</label>
            </DivInputFlout>

            <DivInputFlout>
              <input
                type="unitPrice"
                step="1.00"
                placeholder="0.00"
                id="unitPrice"
                name="unitPrice"
                value={this.state.unitPrice}
                onChange={e => this.setState({ unitPrice: e.target.value })}
              />
              <label>Preço unitario</label>
            </DivInputFlout>
          </AlignItensColum>
        </Container>
      </div>
    );
  }
}
