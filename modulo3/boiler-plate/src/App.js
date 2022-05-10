import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {id:Date.now(),texto:"texto da primeira tarefa", completa:false},
        {id:Date.now(),texto:"texto da segunda tarefa", completa:false}
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
      const tarefasST = JSON.stringify(this.state.tarefas)
    localStorage.setItem ('tarefa', tarefasST)
  };

  componentDidMount() {
    const tarefasLS = localStorage.getItem('tarefa')
    const tarefasN = JSON.parse(tarefasLS)
    this.setState({tarefas: tarefasN})
  };

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {id: Date.now(), texto: this.state.inputValue, completa:false}
    const copiaDoEstado= [...this.state.tarefas]
    copiaDoEstado.push(novaTarefa)
    this.setState({tarefas: copiaDoEstado})
   }

  selectTarefa = (id) => {
      const selecaoTarefas = this.state.tarefas.map((idTarefa) =>{
          if(id === idTarefa.id){
            const statusTarefa = {
              ...idTarefa, completa: !idTarefa.completa
            } 
            return statusTarefa
          } else {
            return idTarefa
          }
      })
      this.setState({tarefas: selecaoTarefas})
      
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() =>this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
