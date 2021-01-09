import React, { useState, useEffect } from "react";
import api from "../api";

export default function Listar() {
    const [users, setUsers] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(async () => {
        const response = await api.get('/users/listar')
        if (response.data == undefined) {
            setIsEmpty(true)
        }
        console.log(response)
        setUsers(response.data)
    }, [])


    if (isEmpty == true) {
        return (
            <h1>Nenhum usuario registrado clique <a href="http://localhost:3000/">aqui</a> para cadastrar novos usuarios</h1>
        );
    } else {
        return (
            <div>
                <center>
                <h1>Lista de Usuarios</h1>
                {users && users.map(p => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={p.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nome:</h5>
                            <p className="card-text">{p.name}</p>

                            <h5 className="card-title">Email:</h5>
                            <p className="card-text">{p.email}</p>
                        </div>
                    </div>
                ))}
                <a href="http://localhost:3000/">voltar a tela de cadastro</a>
                </center>
            </div>
        );
    }
}
