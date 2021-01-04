import React, { useState, Component } from "react";
import api from "../../../api";

import corrosivo from "../../../images/corrosivo.ico";
import sensibilidade_dermica from "../../../images/sensibilidade_dermica.ico";
import toxico from "../../../images/toxico.ico";
import gases_sobre_pressao from "../../../images/gases_sobre_pressao.ico";
import inflamavel from "../../../images/inflamavel.ico";
import explosivo from "../../../images/explosivo.ico";
import perigo_ambiente from "../../../images/perigo_ambiente.ico";
import semImagem from "../../../images/semImagem.ico";
import "./style.css";


import Upload from "../../../hooks/upload/Upload";
import FileList from "../../../hooks/FileList/index";
import NavBar from '../../../hooks/NavBar/NavBar';


import { Container, Content } from "./styles";

import { uniqueId } from "lodash";
import filesize from "filesize";

import {
  ContainerMain,
  DivInputFlout,
  ContainerForm,
  ContainerFormUp,
  ContainerFormUpLeft,
  ContainerFormUpRight,
  ContainerFormDown,
  ConatinerFormDownLeft,
  ConatinerFormDownRight,
  ConatinerCard,
  Card,
  ContainerDropDown,
  ContainerButton,
  ContainerQtde,
  DropDownQtde
} from "./styles";

import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import "react-dropdown/style.css";

export default class ProductRegistration extends Component {
  state = {
    uploadedFiles: [],
    embalagem: [],
    emb: "embalagens",
    id_embalagens: "",

    fabricantes: [],
    fab: "fabricante",
    id_fabricante: "",

    unidade_medida: [],
    unit: "un de medida",
    id_unit: "",

    nome_produto: "",
    massa_molar: "",
    formula_quimica: "",
    aparencia: "",
    ativo: "1",
    classificacao: "",
    composto_para_descarte: "",
    corrosivo: "",
    estabilidade_transporte: "",
    explosivo: "",
    formula_quimica: "",
    gases_sobre_pressao: "",
    indicador: "",
    inflamavel: "",
    massa_molar: "",
    metado_preparo: "",
    nome_produto: "",
    oxidante: "",
    parametro_indicacao: "",
    perigo_ambiente: "",
    perigo_saude: "",
    ph: "",
    metodo_descarte: "",
    qtdeMin: "",
    radioativo: "",
    reage: "",
    reatividade: "",
    descarte_fispq: "",
    sensibilidade_dermica: "",
    toxico: "",
    armazenamento_recomendado: "",
    url_FISPQ: "",
    url_imagem: ""
  };

  async componentDidMount() {
    await api
      .get("/products/sharedDatasProductsRegistration")
      .then(response => {
        console.log(response);
        this.setState({ embalagem: response.data.embalagens });
        this.setState({ fabricantes: response.data.fabricantes });
        this.setState({ unidade_medida: response.data.unidade_medida });
      });
  }
  formSubmit = async event => {
    event.preventDefault();
    const form = this.state;
    console.log(form);
    const data = {
      nome_produto: form.nome_produto,
      massa_molar: form.massa_molar,
      unidade_medida: this.state.id_unit,
      fabricante: this.state.id_fabricante,
      formula_quimica: form.formula_quimica,
      qtdeMin: form.qtdeMin,
      ativo: form.ativo,
      embalagem: this.state.id_embalagens,
      toxico: form.toxico,
      gases_sobre_pressao: form.gases_sobre_pressao,
      sensibilidade_dermica: form.sensibilidade_dermica,
      oxidante: form.oxidante,
      inflamavel: form.inflamavel,
      explosivo: form.explosivo,
      corrosivo: form.corrosivo,
      radioativo: form.radioativo,
      reage: form.reage,
      perigo_ambiente: form.perigo_ambiente,
      classificacao: form.classificacao,
      aparencia: form.aparencia,
      url_FISPQ: form.url_FISPQ,
      perigo_saude: form.perigo_saude,
      ph: form.ph,
      armazenamento_recomendado: form.armazenamento_recomendado,
      metodo_descarte: form.metodo_descarte,
      descarte_fispq: form.descarte_fispq,
      reatividade: form.reatividade,
      estabilidade_transporte: form.estabilidade_transporte,
      indicador: 1,
      parametro_indicacao: false,
      metado_preparo: form.metado_preparo,
      composto_para_descarte: form.composto_para_descarte,
      url_imagem: form.url_imagem
    };

    console.log(data);
    await api
      .post("/products/registerProducts", { data })
      .then(response => {
        console.log(response);
        // this.props.history.push("/products");
        alert("Produto cadastrado com sucesso !!");
      })
      .catch(err => {
        alert("Erro ao cadastrar o produto !!");
        console.log(err);
      });
  };

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id == uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };
  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("/products/uploadImg", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
        this.setState({ url_imagem: response.data.url });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`/products/deleteImg/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  render() {
    const { unidade_medida } = this.state;
    const { fabricantes } = this.state;
    const { embalagem } = this.state;
    const { uploadedFiles } = this.state;

    return (
      <div>
        <NavBar />
        <ContainerMain>
          <ContainerForm>
            <ContainerFormUp>
              <ContainerFormUpLeft>
                <DivInputFlout>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.nome_produto}
                    placeholder="nome do Produto"
                    onChange={e =>
                      this.setState({
                        nome_produto: e.target.value
                      })
                    }
                  />
                  <label>Nome do Produto</label>
                </DivInputFlout>
                <ContainerQtde>
                  <input
                    style={{width : '275px'}}
                    row="3"
                    type="number"
                    step="1.00"
                    placeholder="0.00"
                    id="qtdeMin"
                    name="qtdeMin"
                    value={this.state.qtdeMin}
                    onChange={e => this.setState({ qtdeMin: e.target.value })}
                  />
                  <label>Quantidade Minima</label>

                  <DropDownQtde>
                  {/* DropDown unidade de Medida*/}
                  <Dropdown style={{width : '128px'}}>
                    <Dropdown.Toggle
                      variant="info"
                      className="dropDown"
                      id="fabricante"
                      style={{width: '100%'}}
                    >
                      {this.state.unit}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {unidade_medida &&
                        unidade_medida.map(unit => (
                          <Dropdown.Item
                            id={unit.id}
                            name={unit.nome}
                            className="dropDown-item"
                            onClick={e =>
                              this.setState({
                                unit: unit.nome,
                                id_unit: unit.id
                              })
                            }
                          >
                            {unit.nome}
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* Fim do DropDown Unidade de medida*/}
                  </DropDownQtde>
                </ContainerQtde>
                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="formula Quimica"
                    id="formula_quimica"
                    name="formula_quimica"
                    value={this.state.formula_quimica}
                    onChange={e =>
                      this.setState({
                        formula_quimica: e.target.value
                      })
                    }
                  />
                  <label>Formula Quimica </label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="Classificação"
                    id="classificacao"
                    name="classificacao"
                    value={this.state.classificacao}
                    onChange={e =>
                      this.setState({
                        classificacao: e.target.value
                      })
                    }
                  />
                  <label>Classificação </label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="aparencia"
                    id="aparencia"
                    name="aparencia"
                    value={this.state.aparencia}
                    onChange={e => this.setState({ aparencia: e.target.value })}
                  />
                  <label>Aparencia </label>
                </DivInputFlout>
              </ContainerFormUpLeft>
              <ContainerFormUpRight>
                <Container>
                  <Content>
                    <Upload onUpload={this.handleUpload} />
                    {!!uploadedFiles.length && (
                      <FileList
                        files={uploadedFiles}
                        onDelete={this.handleDelete}
                      />
                    )}
                  </Content>
                </Container>
              </ContainerFormUpRight>
            </ContainerFormUp>
            <ContainerFormDown>
              <ConatinerFormDownLeft>
                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="http://www.fispq.com"
                    id="url_FISPQ"
                    name="url_FISPQ"
                    value={this.state.url_FISPQ}
                    onChange={e =>
                      this.setState({
                        url_FISPQ: e.target.value
                      })
                    }
                  />
                  <label>URL FISPQ </label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="number"
                    placeholder="Nivel de Perigo a Saude"
                    id="perigo_saude"
                    name="perigo_saude"
                    value={this.state.perigo_saude}
                    onChange={e =>
                      this.setState({
                        perigo_saude: e.target.value
                      })
                    }
                  />
                  <label>Nivel de Perigo a Saude </label>
                </DivInputFlout>
                <DivInputFlout>
                  <input
                    type="number"
                    placeholder="PH do produto"
                    id="ph"
                    name="perigo_phsaude"
                    value={this.state.ph}
                    onChange={e => this.setState({ ph: e.target.value })}
                  />
                  <label>PH</label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="Reatividade do produto"
                    id="reatividade"
                    name="reatividade"
                    value={this.state.reatividade}
                    onChange={e =>
                      this.setState({
                        reatividade: e.target.value
                      })
                    }
                  />
                  <label>Reatividade</label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="Estabilidade de Transporte do produto"
                    id="estabilidade_transporte"
                    name="estabilidade_transporte"
                    value={this.state.estabilidade_transporte}
                    onChange={e =>
                      this.setState({
                        estabilidade_transporte: e.target.value
                      })
                    }
                  />
                  <label>Estabilidade de Transporte</label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="Armazenamento Recomendado"
                    id="armazenamento_recomendado"
                    name="armazenamento_recomendado"
                    value={this.state.armazenamento_recomendado}
                    onChange={e =>
                      this.setState({
                        armazenamento_recomendado: e.target.value
                      })
                    }
                  />
                  <label>Armazenamento Recomendado </label>
                </DivInputFlout>
              </ConatinerFormDownLeft>
              <ConatinerFormDownRight>
                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="metado_preparo"
                    id="metado_preparo"
                    name="metado_preparo"
                    value={this.state.metado_preparo}
                    onChange={e =>
                      this.setState({
                        metado_preparo: e.target.value
                      })
                    }
                  />
                  <label>Metodo de Preparo</label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="descarte_fispq"
                    id="descarte_fispq"
                    name="descarte_fispq"
                    value={this.state.descarte_fispq}
                    onChange={e =>
                      this.setState({
                        descarte_fispq: e.target.value
                      })
                    }
                  />
                  <label>Apresenta Descarte Segundo a FISPQ</label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="composto_para_descarte"
                    id="composto_para_descarte"
                    name="composto_para_descarte"
                    value={this.state.composto_para_descarte}
                    onChange={e =>
                      this.setState({
                        composto_para_descarte: e.target.value
                      })
                    }
                  />
                  <label>Composto para Descarte </label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    placeholder="metodo_descarte "
                    id="metodo_descarte "
                    name="metodo_descarte "
                    value={this.state.metodo_descarte}
                    onChange={e =>
                      this.setState({
                        metodo_descarte: e.target.value
                      })
                    }
                  />
                  <label>Metodo Descarte </label>
                </DivInputFlout>

                <DivInputFlout>
                  <input
                    type="text"
                    step="0.01"
                    placeholder="0.00 g/mol"
                    id="utilizado_descarte_outros_compostos "
                    name="utilizado_descarte_outros_compostos "
                    value={this.state.massa_molar}
                    onChange={e =>
                      this.setState({
                        massa_molar: e.target.value
                      })
                    }
                  />
                  <label> Massa Molar </label>
                </DivInputFlout>
              </ConatinerFormDownRight>
            </ContainerFormDown>

            <ContainerDropDown>
              {/* DropDown Fabricante*/}
              <Dropdown >
                <Dropdown.Toggle
                  variant="info"
                  className="dropDown"
                  id="fabricante"
                >
                  {this.state.fab}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <label>Fabricantes</label>
                  </Dropdown.Item>
                  {fabricantes &&
                    fabricantes.map(fab => (
                      <Dropdown.Item
                        id={fab.id}
                        name={fab.nome}
                        className="dropDown-item"
                        onClick={e =>
                          this.setState({
                            fab: fab.nome,
                            id_fabricante: fab.id
                          })
                        }
                      >
                        {fab.nome}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Fim do DropDown Fabricante*/}

              {/* DropDown Embalagens*/}
              <Dropdown>
                <Dropdown.Toggle
                  variant="info"
                  className="dropDown"
                  id="fabricante"
                >
                  {this.state.emb}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <label>Embalagens</label>
                  </Dropdown.Item>
                  {embalagem &&
                    embalagem.map(emb => (
                      <Dropdown.Item
                        id={emb.id}
                        name={emb.nome}
                        className="dropDown-item"
                        onClick={e =>
                          this.setState({
                            emb: emb.nome,
                            id_embalagens: emb.id
                          })
                        }
                      >
                        {emb.nome}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Fim do DropDown Embalagens*/}
            </ContainerDropDown>
          </ContainerForm>

          {/* COMEÇO  CARDS */}
          <ConatinerCard>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={sensibilidade_dermica}
              />
              <div className="title-Card">Sensibilidade Dermica</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="sensibilidade_dermica"
                  id="sensibilidade_dermica1"
                  onClick={e =>
                    this.setState({
                      sensibilidade_dermica: e.target.value
                    })
                  }
                />
                <label for="sensibilidade_dermica1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="sensibilidade_dermica"
                  id="sensibilidade_dermica2"
                  onClick={e =>
                    this.setState({
                      sensibilidade_dermica: e.target.value
                    })
                  }
                />
                <label for="sensibilidade_dermica2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={semImagem}
              />
              <div className="title-Card">Oxidante</div>
              <div className="radio">
                <input
                  type="radio"
                  value="1"
                  id="oxidante1"
                  name="oxidante"
                  onClick={e => this.setState({ oxidante: e.target.value })}
                />

                <label for="oxidante1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="oxidante"
                  id="oxidante2"
                  onClick={e => this.setState({ oxidante: e.target.value })}
                />
                <label for="oxidante2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={toxico}
              />
              <div className="title-Card">Toxico</div>
              <div>
                <input
                  variant="secondary"
                  type="radio"
                  value="1"
                  name="toxico"
                  id="toxico1"
                  onClick={e => this.setState({ toxico: e.target.value })}
                />
                <label for="toxico1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="toxico"
                  id="toxico2"
                  onClick={e => this.setState({ toxico: e.target.value })}
                />
                <label for="toxico2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={gases_sobre_pressao}
              />
              <div className="title-Card">Gases sobre Pressão</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="gases_sobre_pressao"
                  id="gases_sobre_pressao1"
                  onClick={e =>
                    this.setState({
                      gases_sobre_pressao: e.target.value
                    })
                  }
                />
                <label for="gases_sobre_pressao1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="gases_sobre_pressao"
                  id="gases_sobre_pressao2"
                  onClick={e =>
                    this.setState({
                      gases_sobre_pressao: e.target.value
                    })
                  }
                />
                <label for="gases_sobre_pressao2">sim</label>
              </div>
            </Card>

            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={inflamavel}
              />
              <div className="title-Card">Inflamavel</div>
              <div>
                <input
                  variant="secondary"
                  type="radio"
                  value="1"
                  name="inflamavel"
                  id="inflamavel1"
                  onClick={e => this.setState({ inflamavel: e.target.value })}
                />
                <label for="inflamavel1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="inflamavel"
                  id="inflamavel2"
                  onClick={e => this.setState({ inflamavel: e.target.value })}
                />
                <label for="inflamavel2">não</label>
              </div>
            </Card>

            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={explosivo}
              />
              <div className="title-Card">Explosivo</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="explosivo"
                  id="explosivo1"
                  onClick={e => this.setState({ explosivo: e.target.value })}
                />
                <label for="explosivo1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="explosivo"
                  id="explosivo2"
                  onClick={e => this.setState({ explosivo: e.target.value })}
                />
                <label for="explosivo2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={corrosivo}
              />
              <div className="title-Card">corrosivo</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="corrosivo"
                  id="corrosivo1"
                  onClick={e => this.setState({ corrosivo: e.target.value })}
                />
                <label for="corrosivo1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="corrosivo"
                  id="corrosivo2"
                  onClick={e => this.setState({ corrosivo: e.target.value })}
                />
                <label for="corrosivo2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={semImagem}
              />
              <div className="title-Card">Radioativo</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="radioativo"
                  id="radioativo1"
                  onClick={e => this.setState({ radioativo: e.target.value })}
                />
                <label for="radioativo1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="radioativo"
                  id="radioativo2"
                  onClick={e => this.setState({ radioativo: e.target.value })}
                />
                <label for="radioativo2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={semImagem}
              />
              <div className="title-Card">Reage com H2O</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="reage"
                  id="reage1"
                  onClick={e => this.setState({ reage: e.target.value })}
                />
                <label for="reage1">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="reage"
                  id="reage2"
                  onClick={e => this.setState({ reage: e.target.value })}
                />
                <label for="reage2">não</label>
              </div>
            </Card>
            <Card>
              <img
                className="img"
                style={{ width: "70px", height: "60px" }}
                src={perigo_ambiente}
              />
              <div className="title-Card">Perigo ao ambiente</div>
              <div>
                <input
                  type="radio"
                  value="1"
                  name="perigo_ambiente"
                  id="perigo_ambiente"
                  onClick={e =>
                    this.setState({ perigo_ambiente: e.target.value })
                  }
                />
                <label for="perigo_ambiente">sim</label>
                <input
                  type="radio"
                  value="0"
                  name="perigo_ambiente"
                  id="perigo_ambiente2"
                  onClick={e =>
                    this.setState({ perigo_ambiente: e.target.value })
                  }
                />
                <label for="perigo_ambiente2">não</label>
              </div>
            </Card>
            <ContainerButton>
              <ButtonGroup>
                <Button type="submit" variant="info" onClick={this.formSubmit}>
                  Salvar
                </Button>
              </ButtonGroup>
              &nbsp;&nbsp;
              <ButtonGroup>
                <Button
                  type="submit"
                  variant="danger"
                  onClick={this.formSubmit}
                >
                  Cancelar
                </Button>
              </ButtonGroup>
            </ContainerButton>
          </ConatinerCard>
        </ContainerMain>
      </div>
    );
  }
}
