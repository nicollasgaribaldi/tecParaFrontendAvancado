import React from 'react';

const Aluno = ({ nome, email, curso, media }) => {
  const status = media >= 7.0 ? "APROVADO(A)" : "REPROVADO(A)";

  return (
    <>
      <p>Nome: {nome}</p>
      <p>E-mail: {email}</p>
      <p>Curso: {curso}</p>
      <p>Média: {media}</p>
      <p>Status: {status}</p>
      <hr />
    </>
  );
};

export default Aluno;
