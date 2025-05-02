import React, { useState } from "react";

const FormularioDeContato = () => {

    const [nome, setNome] = useState();
    const [contato, setContato] = useState();
    const [mensagem, setMensagem] = useState();

    const handleName = (e) => {
        setNome(e.target.value);
    };

    const handleContato = (e) => {
        setContato(e.target.value);
    };

    const handleMensagem = (e) => {
        setMensagem(e.target.value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const objetoLiteral = {
            nome,
            contato,
            mensagem
        };

        let jsonToSend = JSON.stringify(objetoLiteral);
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);

    };

    return (
        <div>
            <h3>Formulário de Envio</h3>
            <form onSubmit={handleSubmit}>

                <label>
                    Nome:
                    <input name="nome" type="text" onChange={handleName} />
                </label>

                <br />

                <label>
                    Contato:
                    <input name="contato" type="text" onChange={handleContato} />
                </label>

                <br />

                <label>
                    Mensagem:
                    <input type="text" name="mensagem" onChange={handleMensagem} />
                </label>

                <br />
                <button>Enviar</button>

            </form>
        </div>
    );
};

export default FormularioDeContato;