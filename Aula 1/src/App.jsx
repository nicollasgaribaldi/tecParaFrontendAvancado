import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>

      <h1>Exercício 01 React</h1>

      <hr />

      <h2>Exercício 01</h2>

      <br /> <br />

      <Adicao num1 = {30} num2={60} />
      <Subtracao num1 ={38} num2={9} />
      <Multiplicacao num1={14} num2={7} />
      <Divisao num1 ={70} num2={30} />

      <br /> <br />

      <hr />

      <h2>Exercício 02</h2>

      <br /><br />
      <PrecisoEstudar nomeDaTecnologia="Vue3" />
    </div>
  )
}

export default App