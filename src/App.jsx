import './global.css'
import Header from './components/header';
import Input from './components/Input';
import Task from './components/Task';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [posts , setPosts] = useState([
    { 
      id: 1, 
      text: "Tarefa 1",
    },
    {
      id: 2,
      text: "Tarefa 2",
    }
  ]);

  const adicionarTarefa = (novaTarefa) => {
    if (novaTarefa.trim()) {
      const novoPost = {
        id: posts.length + 1, 
        text: novaTarefa,
      };

      setPosts([...posts, novoPost]);
    }
  };

  function deleteComente(text) {
    console.log(`Deletar comentario ${text}`)
  }

  return (
    <div>
      <Header/>

      <div className={styles.container}>
        <Input adicionarTarefa={adicionarTarefa}/>
      </div>

      <div className={styles.task}>

        <header>
          <p>Tarefas criadas 0</p>
          <p>Concluídas 0</p>
        </header>

       {posts.map((posts) => (
          <Task key={posts.id} text={posts.text} deleteComente={deleteComente}/>
        ))}

      </div>
    </div>
  )
}

export default App;
