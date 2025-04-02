import React from 'react';
import Aluno from './components/Aluno';

const App = () => {
  const alunos = [
    { nome: "João", email: "joao@gmail.com", curso: "Sistemas para Internet", media: 8.5 },
    { nome: "Maria", email: "maria@gmail.com", curso: "Sistemas de Informação", media: 6.0 },
    { nome: "Nícollas", email: "nicollas@gmail.com", curso: "Sistemas para Internet", media: 7.2 }
  ];

  return (
    <div>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  );
};

export default App;
