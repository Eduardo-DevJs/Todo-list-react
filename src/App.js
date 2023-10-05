import { useState, useRef } from 'react';
import {
  Container,
  Form,
  Input,
  Label,
  InputCheckBox,
  Lista,
  Item,
  Button,
} from './style';
import Trash from './assets/lixeira.svg';

const App = () => {
  const [tarefas, setTarefa] = useState([]);
  const inputTarefa = useRef();

  const adicionarNovoTarefa = () => {
    setTarefa([
      ...tarefas,
      {
        id: Math.floor(Math.random() * 100),
        tarefa: inputTarefa.current.value,
      },
    ]);

    inputTarefa.current.value = '';
  };

  const deletarTarefas = (tarefaId) => {
    const deleteTarefa = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefa(deleteTarefa);
  };

  const tarefaFeita = (evt) => {
    const alvoCheck = evt.target.parentNode;

    if (alvoCheck) {
      alvoCheck.classList.toggle('marcado');
    }
  };

  return (
    <>
      <Container>
        <Form>
          <Label for="nome">Digite uma tarefa:</Label>
          <Input ref={inputTarefa} id="nome" placeholder="Digite uma tarefa" />
          <Button onClick={adicionarNovoTarefa}>+</Button>
          <Lista>
            {tarefas.map(({ id, tarefa }) => (
              <Item key={id}>
                <div className='d-flex'>
                  <InputCheckBox onChange={tarefaFeita} type="checkbox" />
                  <p>{tarefa}</p>
                </div>
                <button onClick={() => deletarTarefas(id)}>
                  <img alt="lixeira" src={Trash} />
                </button>
              </Item>
            ))}
          </Lista>
        </Form>
      </Container>
    </>
  );
};

export default App;
