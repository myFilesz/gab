import React, { Component } from "react";
import api from "../../../api";

import { Table , TableWrapper } from './styles';

class ListRequests extends Component {
  state = {
    pedidos: [],
    produtos_p: ''
  };

  async componentDidMount() {
    const response = await api.get("/requests");
    console.log(response);
    this.setState({ pedidos: response.data });
  }

  handleEdit = async e => {
   
  };

  render() {
    const { pedidos } = this.state;
    const { produtos_p } = this.state;

    return (
      <div>
        <div>
          <h1>Lista de Pedidos</h1>
        </div >
        <a href="http://localhost:3001/requests/requestscreate" >Adicionar pedido</a>
        <TableWrapper>
         
          <Table>
            <thead>
              <tr>
                <th scope="col">n° Pedido</th>
                <th scope="col">Data</th>
                <th scope="col">Requisitante</th>
                <th scope="col">Aprovador</th>
                <th scope="col">Motivo</th>
                <th scope="col">status</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>001</td>
                    <td>10/08/2020</td>
                    <td>002</td>
                    <td>003</td>
                    <td>Repor Estoque</td>
                    <td>Aporvado</td>
                    <td>
                      <button
                        type="submit"
                        onClick={this.edit}
                        // value={req.id}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>10/05/2021</td>
                    <td>002</td>
                    <td>003</td>
                    <td>Repor Estoque</td>
                    <td>Em Analise</td>
                    <td>
                      <button
                        type="submit"
                        onClick={this.edit}
                        // value={req.id}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
            </tbody>
          </Table>
        </TableWrapper>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>id_Produto</th>
                <th>Nome</th>
                <th>Quant.</th> 
                <th>Aprovador</th>
                <th>Requisitante</th>
                <th>Cod. Pedido</th>
              </tr>
            </thead>
            <tbody>
              {produtos_p && produtos_p.map(p => (
                  <tr>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>{p.qtde}</td>
                    <td>{p.id_aprovador}</td>
                    <td>{p.id_requisitante}</td>
                    <td>{p.id_pedido}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </TableWrapper>
      </div>
    );
  }
}

export default ListRequests;
