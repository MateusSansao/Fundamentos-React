import './global.css'
import Header from './components/header';
import Input from './components/Input';
import Task from './components/Task';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [posts , setPosts] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    if (novaTarefa.trim()) {
      const novoPost = {
        id: posts.length + 1, 
        text: novaTarefa,
      };

      setPosts([...posts, novoPost]);
    }
  };

  function deleteComente(textToDelete) {
    const filterText = posts.filter(posts => {
      return posts.text != textToDelete;
    })

    setPosts(filterText);
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
