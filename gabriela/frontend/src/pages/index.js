import React, { useState, useEffect } from "react";
import api from "../api";
import Upload from "../Upload/index";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("#");
  const [visible, setVisible] = useState("none");


  useEffect(() => {
    setVisible('block');
  }, [url]);

  function submitForm(e) {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      url: url
    };
    const response = api.post("/users/registro", { data });
  }

  function handleUpload(files) {
    console.log(files)
    const uploadeFile = files.map(file => ({
      file,
      name: file.name,
      uploaded: false,
      error: false,
      url: null
    }));

    console.log(uploadeFile);

    uploadeFile.forEach(processUpload);
  };

  function processUpload(uploadeFile) {
    const data = new FormData();

    data.append("file", uploadeFile.file, uploadeFile.name);

    api.post("/users/uploadImg", data)
      .then(response => {

        setUrl(response.data.url);
        console.log(url)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div>
        <center>

      <div className="card" style={{ width: '18rem' }}>
        <Upload onUpload={handleUpload} />
        <img src={url} style={{
          width: "100%",
          height: "200px"
        }} />
        <form>
          <div className="card-body">
            <h5 className="card-title"><label>Nome</label></h5>
            <p className="card-text">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              /></p>
            <h5 className="card-title"><label>Email</label></h5>
            <p className="card-text">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </p>
            <button onClick={submitForm} type="submit">Enviar</button>
          </div>
        </form>
      </div>
      </center>

      <h1>
        <a href={url} style={{ display: visible }} >Clique aqui para ver a imagem</a>
      </h1>
      clique <a href="http://localhost:3000/listar">Aqui</a> para ver todos os usuarios
    </div>
  );
}
