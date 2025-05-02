import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/alunos";

const ListarAlunos = () => {
    
    // Criando GET
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            setAlunos(data);
        }

        fetchData();
    }, []);

        // Criando POST
        const [nome, setNome] = useState("");
        const [matricula, setMatricula] = useState("");
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            const alunoParaAdicionar = {
                nome: nome,
                matricula: matricula
            };
    
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(alunoParaAdicionar)
            });
    
            const alunoAdicionando = await response.json();
    
            setAlunos((alunoAnterior) => [...alunoAnterior, alunoAdicionando]);
    
            setNome("");
            setMatricula("");
            fetchData();

        };

    return (
        <div>
            <h3>Lista dos Alunos</h3>
            <table border="1" cellPadding="10" cellSpacing="0">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Matricula</th>
                    </tr>
                </thead>

                <tbody>
                    {alunos.map((alunos) => (

                        <tr key={alunos.id}>

                            <td>{alunos.id}</td>
                            <td>{alunos.nome}</td>
                            <td>{alunos.matricula}</td>

                        </tr>

                    ))}
                </tbody>
            </table>

            <br />

            <h3>Adicionar Aluno</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={nome} 
                    onChange={(e) => setNome(e.target.value)} />
                </label>

                <br />

                <label>
                    Matricula:
                    <input type="text" name="matricula" value={matricula} 
                    onChange={(e) => setMatricula(e.target.value)} />
                </label>

                <br />

                <input type="submit" value="Salvar" />

            </form>

        </div>
    );
};

export default ListarAlunos;