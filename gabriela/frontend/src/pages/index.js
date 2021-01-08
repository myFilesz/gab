import React, { useState, useEffect } from "react";
import api from "../api";
import Upload from "../Upload/index";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState([]);
  const [url, setUrl] = useState("");
  const [upload, setUpload] = useState(false);
  const [visible, setVisible] = useState("none");
  const [link, setLink] = useState("#");
  const [img, setImg] = useState('');

  useEffect(() => {
    setVisible("block");
  }, [upload]);

  function submitForm(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    const data = {
      name: e.target.name,
      email: e.target.email
    };
    const response = api.post("/users/registro", { data });

    api.post("/users/uploadimg", { file }).then(response =>{
        console.log(response)
        setUpload(true);
    }).catch(
        (err) => console.log(err)
    )
  }

  return (
    <div>
    <Upload onUpload={this.handleUpload} />
      <form onSubmit={submitForm} >
        <div
          style={{
            width: "300px",
            height: "300px"
          }}
        >
        <img src={file} />
        </div>
        <label>Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button type="submit">Enviar</button>
        <h1>
          Clique{" "}
          <a
            href={link}
            style={{
              display: visible
            }}
          >
            aqui
          </a>
          para ver a imagem
        </h1>
      </form>
    </div>
  );
}
