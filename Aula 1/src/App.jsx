import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <h1>Exercícios Tecnologias para Front-end Avançado</h1>
      <hr />

      <h2>Exercício 01</h2>

      <Adicao num1 = {10} num2={5} />
      <Subtracao num1 ={15} num2={0} />
      <Multiplicacao num1={5} num2={3} />
      <Divisao num1 ={30} num2={2} />

      <br />
      <hr />

      <h2>Exercício 02</h2>

      <PrecisoEstudar nomeDaTecnologia="Python" />
    </div>
  )
}

export default App