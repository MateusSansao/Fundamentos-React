import './global.css'
import Header from './components/header';
import Input from './components/Input';
import Task from './components/Task';
import styles from './App.module.css';
import { useState } from 'react';

function App({}) {

  const [taskCheck, setTaskCheck] = useState(0);
  const [taskconclusion, setTaskConclusion] = useState(0);
  const [posts, setPosts] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    if (novaTarefa.trim()) {
      const novoPost = {
        id: posts.length + 1, 
        text: novaTarefa,
      };

      setPosts([...posts, novoPost]);

      setTaskCheck(taskCheck + 1);
    }
  };

  function deleteComente(textToDelete) {
    const filterText = posts.filter(posts => {
      return posts.text != textToDelete;
    })

    setPosts(filterText);

    setTaskCheck(taskCheck - 1);
  }

  const updateTaskConclusion = (increment) => {
    setTaskConclusion((prev) => prev + increment);
  };

  return (
    <div>
      <Header/>

      <div className={styles.container}>
        <Input adicionarTarefa={adicionarTarefa}/>
      </div>

      <div className={styles.task}>

        <header>
          <div>
            <p>Tarefas criadas</p>
            <span>
              {taskCheck}
            </span>
          </div>

          <div>
            <p>Concluídas</p>
            <span className={styles.spanCompleted}>
              {taskconclusion} de {taskCheck}
            </span>
          </div>
        </header>

       {posts.map((posts) => (
          <Task key={posts.id} text={posts.text} deleteComente={deleteComente} updateTaskConclusion={updateTaskConclusion}/>
        ))}

      </div>
    </div>
  )
}

export default App;
